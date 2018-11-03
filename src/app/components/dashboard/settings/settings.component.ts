import { Component, OnInit } from '@angular/core';
import { SettingsService, Data } from 'src/app/services/settings.service';
import { AlertService } from 'src/app/services/alert-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  data: Data

  constructor(private settingsService: SettingsService, private alertService: AlertService) { }

  ngOnInit() {
    this.settingsService.getSettings().subscribe(settings => {
      this.data = settings.data
    },
      error => {
        this.alertService.error(JSON.stringify(error.json()))
      })
  }

}
