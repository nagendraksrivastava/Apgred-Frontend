import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { TotalusersService } from './services/totalusers.service';

import { AppComponent } from './app.component';
import { TotalusersComponent } from './components/totalusers/totalusers.component';
import { HomeComponent } from './components/home/home.component';
import { VersionManagementComponent } from './components/version-management/version-management.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalusersComponent,
    HomeComponent,
    VersionManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [TotalusersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
