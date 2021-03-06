import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  login() {
    this.loading = true;
    this.loginService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.loading = false
          var failure = (data as any)
          if (failure.status && failure.status.message) {
            this.alertService.error(failure.status.message)
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.alertService.error(error.message);
          this.loading = false;
        });
  }

}
