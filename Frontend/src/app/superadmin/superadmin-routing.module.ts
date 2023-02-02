import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSuperadminComponent } from './login-superadmin/login-superadmin.component';
import { SuperadminGuard } from '../shared/superadmin.guard';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { DashboardSuperadminComponent } from './dashboard-superadmin/dashboard-superadmin.component';
const routes: Routes = [
 
  { path: '', component: LoginSuperadminComponent },
  {
    path: 'dashboard',
    canActivate:[  SuperadminGuard],
    component: SuperadminComponent,
    children: [
      { path:"", component: DashboardSuperadminComponent },
      { path: 'manageadmin', component: AdminManageComponent },
      { path: 'manageuser', component: UserManageComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
