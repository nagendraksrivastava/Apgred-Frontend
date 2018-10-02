import { Component, OnInit } from '@angular/core';
import { VersionmanagementService, VersionDetail } from '../../../services/versionmanagement.service';
import { LocalStorageService } from '../../../services/local-storage.service';

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

  constructor(private service: VersionmanagementService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    console.log(this.loggedInUser)
    this.service.getAppVersions(this.loggedInUser.app_token)
      .subscribe(versions => {
        this.versions = versions.version_details
        this.appName = this.versions[0].app_name
        this.packageName = this.versions[0].package_name
      })
  }

}
