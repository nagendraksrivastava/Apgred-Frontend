import { Component, OnInit } from '@angular/core';
import { BusinessleadsService } from 'src/app/services/businessleads.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  model: any = {};
  loading = false;
  public show: boolean = false;

  constructor(private businessLeadsService: BusinessleadsService) { }

  ngOnInit() {
  }

  businessLeads() {
    this.loading = true;
    this.businessLeadsService.businessLead(this.model.email, this.model.phone).subscribe(success => {
      this.loading = false;
      this.show = true;
      setTimeout(function () {
        this.show = false;
      }.bind(this), 5000);
    }, error => {
      this.loading = false;
      this.show = false;
    })
  }

}
