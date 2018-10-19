import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../../../node_modules/@angular/common/http';
import { HomeComponent } from './home/home.component';
import { VersionManagementComponent } from './version-management/version-management.component';
import { TotalusersComponent } from './totalusers/totalusers.component';
import { DailyactiveComponent } from './dailyactive/dailyactive.component';
import { WeeklyactiveComponent } from './weeklyactive/weeklyactive.component';
import { MonthlyactiveComponent } from './monthlyactive/monthlyactive.component';
import { LargenumberpipePipe } from '../../pipes/largenumberpipe.pipe';
import { TotalusersService } from '../../services/totalusers.service';
import { ActiveusersService } from '../../services/activeusers.service';
import { ApgredRequestInterceptor } from '../../services/interceptor.service';
import { AuthGuard } from '../../guards/auth.guard';
import { LocalStorageService } from '../../services/local-storage.service';
import { VersionmanagementService } from '../../services/versionmanagement.service';
import { VersionsComponent } from './versions/versions.component';
import { FormsModule } from '@angular/forms';
import { AddVersionComponent } from './add-version/add-version.component';
import { AddVersionService } from '../../services/add-version.service';
import { AppcommonModule } from '../appcommon/appcommon.module';
import { EnableVersionProdService } from 'src/app/services/enable-version-prod.service';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'versionmanagement',
        component: VersionManagementComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(dashboardRoutes),
    FormsModule,
    AppcommonModule
  ],
  declarations: [
    TotalusersComponent,
    HomeComponent,
    VersionManagementComponent,
    DailyactiveComponent,
    WeeklyactiveComponent,
    MonthlyactiveComponent,
    LargenumberpipePipe,
    VersionsComponent,
    AddVersionComponent,
  ],
  exports: [],
  providers: [
    TotalusersService,
    ActiveusersService,
    LocalStorageService,
    VersionmanagementService,
    AddVersionService,
    EnableVersionProdService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApgredRequestInterceptor,
      multi: true
    }],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
