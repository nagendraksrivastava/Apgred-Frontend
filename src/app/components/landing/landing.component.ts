import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { BusinessleadsService } from 'src/app/services/businessleads.service';
import { headersToString } from 'selenium-webdriver/http';

declare const window: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit {

  @ViewChild('f') form;
  @ViewChild('header') header: ElementRef;
  model: any = {};
  loading = false;
  public show: boolean = false;
  public contentScrolled: boolean = false;
  private scrollHeight: number = 0;

  constructor(private businessLeadsService: BusinessleadsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.scrollHeight = this.header.nativeElement.offsetHeight;
  }

  scroll(el) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > (this.scrollHeight - (this.scrollHeight / 2))) {
      this.contentScrolled = true;
    } else {
      this.contentScrolled = false;
    }
  }

  businessLeads() {
    this.loading = true;
    this.businessLeadsService.businessLead(this.model.email, this.model.phone).subscribe(success => {
      this.form.resetForm();
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
