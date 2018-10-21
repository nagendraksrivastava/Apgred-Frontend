import { Component, OnInit, ViewChild } from '@angular/core';
import { VersionmanagementService, VersionDetail } from '../../../services/versionmanagement.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { EnableVersionProdService } from 'src/app/services/enable-version-prod.service';
import { UpdateVersionService } from 'src/app/services/update-version.service';

export class UpdateAppRequest {
  update_type: string;
  version_name: string;
  version_code: number;
  title: string;
  message: string;
  positive_button_text: string;
  negative_button_text: string;
  app_token: string;
  percentage: string;
  individual_update: boolean
}
declare var $;

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {

  versions: VersionDetail[]
  appName: string
  packageName: string
  loggedInUser: any
  model: UpdateAppRequest = new UpdateAppRequest()
  updateType: string = "soft"
  @ViewChild('appUpdateModal') appUpdateModal;

  constructor(private service: VersionmanagementService, private localStorageService: LocalStorageService,
    private enableVersionProdService: EnableVersionProdService, private updateVersionService: UpdateVersionService) { }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    this.getAppVersions();
  }

  public getAppVersions() {
    this.service.getAppVersions(this.loggedInUser.app_token)
      .subscribe(versions => {
        this.versions = versions.version_details;
        this.appName = this.versions[0].app_name;
        this.packageName = this.versions[0].package_name;
      });
  }

  public openModal(version: VersionDetail) {
    console.log("calling openModal: " + version)
    this.model.version_name = version.version_name
    this.model.version_code = version.version_code
    this.model.title = ""
    this.model.message = ""
    this.model.positive_button_text = ""
    this.model.negative_button_text = ""
    $(this.appUpdateModal.nativeElement).modal('show')
  }

  public closeModal() {
    $(this.appUpdateModal.nativeElement).modal('hide')
  }

  public changeEnabledAndIsProd(version: VersionDetail) {
    console.log("called onIsProductionChanged")
    console.log(version)
    this.enableVersionProdService.enableVersion(this.loggedInUser.app_token, version).subscribe()
    this.enableVersionProdService.enableIsProduction(this.loggedInUser.app_token, version).subscribe()
    // this.getAppVersions()
  }

  public updateVersion() {
    this.updateVersionService.updateVersion(this.updateType, this.model.version_name, this.model.version_code, this.model.title,
      this.model.message, this.model.positive_button_text, this.model.negative_button_text, this.loggedInUser.app_token, "100", false)
      .subscribe(success => {
        this.closeModal()
      })
  }

  public onChange(event): void {
    this.updateType = event.target.value;
    console.log(this.updateType);
  }

}
