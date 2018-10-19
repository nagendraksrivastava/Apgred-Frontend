import { Component, OnInit } from '@angular/core';
import { VersionmanagementService, VersionDetail } from '../../../services/versionmanagement.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { EnableVersionProdService } from 'src/app/services/enable-version-prod.service';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {

  versions: VersionDetail[]
  appName: string
  packageName: string
  loggedInUser: any;
  model: any = {};

  constructor(private service: VersionmanagementService, private localStorageService: LocalStorageService, private enableVersionProdService: EnableVersionProdService) { }

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

  public changeEnabledAndIsProd(version: VersionDetail) {
    console.log("called onIsProductionChanged")
    console.log(version)
    this.enableVersionProdService.enableVersion(this.loggedInUser.app_token, version).subscribe()
    this.enableVersionProdService.enableIsProduction(this.loggedInUser.app_token, version).subscribe()
    // this.getAppVersions()
  }

  public updateVersion(version: VersionDetail) {

  }

}
