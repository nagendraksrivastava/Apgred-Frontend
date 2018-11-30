import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AddVersionService } from '../../../services/add-version.service';
import { AlertService } from '../../../services/alert-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { VersionsComponent } from '../versions/versions.component';

@Component({
  selector: 'app-add-version',
  templateUrl: './add-version.component.html',
  styleUrls: ['./add-version.component.scss']
})
export class AddVersionComponent implements OnInit {

  model: any = {};
  loading = false;
  loggedInUser: any;
  @Input()
  allVersions: VersionsComponent;
  @ViewChild('f') form;
  collapse: boolean = true;

  constructor(private add_version_service: AddVersionService, private alert_service: AlertService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  scroll(el) {
    if (!this.collapse) {
      setTimeout(function () {
        el.scrollIntoView({ behavior: "smooth" });
      }.bind(this), 400);
    }
  }

  addVersion() {
    this.loading = true;
    this.loggedInUser = this.localStorageService.get("loggedInUser");
    this.add_version_service.addVersion(this.loggedInUser.app_token, this.model.versionName,
      this.model.versionCode, (this.model.isProduction != null ? this.model.isProduction : false),
      (this.model.isEnabled != null ? this.model.isEnabled : false),
      this.model.releaseNotes)
      .subscribe(data => {
        //reload all versions
        this.loading = false;
        this.form.resetForm();
        this.allVersions.getAppVersions()
      },
        error => {
          this.loading = false;
          this.alert_service.error("Unable to add version, please try again!");
        })
  }

}
