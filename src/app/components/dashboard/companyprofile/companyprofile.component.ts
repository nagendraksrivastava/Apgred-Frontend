import { Component, OnInit } from '@angular/core';
import { ProfileService, CompanyProfile } from 'src/app/services/profile.service';
import { AlertService } from 'src/app/services/alert-service.service';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.scss']
})
export class CompanyprofileComponent implements OnInit {

  companyProfile: CompanyProfile

  constructor(private profileService: ProfileService, private alertService: AlertService) { }

  ngOnInit() {
    this.profileService.getCompanyProfile().subscribe(profile => {
      this.companyProfile = profile
    },
      error => {
        this.alertService.error(JSON.stringify(error.json()))
      })
  }

}
