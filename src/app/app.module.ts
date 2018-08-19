import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { TotalusersService } from './services/totalusers.service';
import { ActiveusersService } from './services/activeusers.service'

import { AppComponent } from './app.component';
import { TotalusersComponent } from './components/totalusers/totalusers.component';
import { HomeComponent } from './components/home/home.component';
import { VersionManagementComponent } from './components/version-management/version-management.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApgredRequestInterceptor } from './services/interceptor.service';
import { DailyactiveComponent } from './components/dailyactive/dailyactive.component';
import { WeeklyactiveComponent } from './components/weeklyactive/weeklyactive.component';
import { MonthlyactiveComponent } from './components/monthlyactive/monthlyactive.component';
import { LargenumberpipePipe } from './pipes/largenumberpipe.pipe';
import { DashboardheaderComponent } from './components/dashboardheader/dashboardheader.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalusersComponent,
    HomeComponent,
    VersionManagementComponent,
    DailyactiveComponent,
    WeeklyactiveComponent,
    MonthlyactiveComponent,
    LargenumberpipePipe,
    DashboardheaderComponent,
    LandingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [
    TotalusersService,
    ActiveusersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApgredRequestInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
