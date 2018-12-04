import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert-service.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent  implements OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { 
      this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}