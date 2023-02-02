import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from '../shared/admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { CategoryCreationAdminComponent } from './category-creation-admin/category-creation-admin.component';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { DashboardPartComponent } from './dashboard-part/dashboard-part.component';
const routes: Routes = [

  { path: '', component: LoginComponent },
  {path:"dashboard", canActivate:[ AdminGuard] , component:AdminDashboardComponent,children:[
    {path:"",component:DashboardPartComponent},
    {path:"viewCategory",component:CategoryViewComponent , children:[]},
    {path:"createCategory",component:CategoryCreationAdminComponent},
    {path:"posts",component:PostComponent},
    {path:"singlePost",component:SinglePostComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
