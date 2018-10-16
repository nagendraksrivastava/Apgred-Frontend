import { Component, OnInit } from '@angular/core';
import { AddVersionService } from '../../../services/add-version.service';
import { AlertService } from '../../../services/alert-service.service';

@Component({
  selector: 'app-add-version',
  templateUrl: './add-version.component.html',
  styleUrls: ['./add-version.component.scss']
})
export class AddVersionComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(add_version_service: AddVersionService, private alert_service: AlertService) { }

  ngOnInit() {
  }

  addVersion(){
    
  }

}
