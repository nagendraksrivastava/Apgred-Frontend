import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { LoginService } from './services/login.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthGuard } from './guards/auth.guard';
import { AppcommonModule } from './components/appcommon/appcommon.module';
import { AlertComponent } from './components/alert/alert.component';
import { BusinessleadsService } from './services/businessleads.service';
import { GetfeedbackService } from './services/getfeedback.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    NotfoundComponent,
    AlertComponent,
  ],
  imports: [
    AppcommonModule,
    BrowserModule,
    AppRoutes,
    HttpClientModule,
    DashboardModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
    LoginService,
    LocalStorageService,
    BusinessleadsService,
    GetfeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
