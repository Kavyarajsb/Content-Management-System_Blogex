import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './user.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPostEditComponent } from './user-post-edit/user-post-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPostCreateComponent } from './user-post-create/user-post-create.component';
import { UserSinglePostComponent } from './user-single-post/user-single-post.component';
import { UserPostCategoryComponent } from './user-post-category/user-post-category.component';
import { UserNewPostComponent } from './user-new-post/user-new-post.component';
import { HomeComponent } from './home/home.component';
import { LoginOptComponent } from './login-opt/login-opt.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent,
      children:[
      { path: 'loginopt', component: LoginOptComponent},
    ]},
      { path: 'login', component: UserLoginComponent},
      { path: 'signup', component: UserSignupComponent},
      {
        path:'dashboard',
        canActivate:[ UserGuard] ,
        component: UserDashboardComponent,
        children: [
          { path: '', component:UserNewPostComponent },
          { path: 'editPost', component: UserPostEditComponent },
          {path:'yourPosts',component:UserProfileComponent},
          {path:'createPost',component:UserPostCreateComponent},
          {path:'singlePost',component:UserSinglePostComponent},
          {path:'postInCategory',component:UserPostCategoryComponent}
        ],
      },
    ],
  },

  {path: 'admin',
  loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {path: 'superadmin',
  loadChildren: () => import('./superadmin/superadmin.module').then((m) => m.SuperadminModule),
  },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
