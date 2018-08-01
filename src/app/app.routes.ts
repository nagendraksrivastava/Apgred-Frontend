import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { VersionManagementComponent } from './components/version-management/version-management.component'

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'versionmanagement', component: VersionManagementComponent }];

export const AppRoutes = RouterModule.forRoot(routes);
