import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

import{MatSelectModule}from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule} from '@angular/material/sidenav'
import {MatTabsModule} from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPostCategoryComponent } from './user-post-category/user-post-category.component';
import { UserPostEditComponent } from './user-post-edit/user-post-edit.component';
import { UserPostCreateComponent } from './user-post-create/user-post-create.component';
import { HomeComponent } from './home/home.component';
import { UserSinglePostComponent } from './user-single-post/user-single-post.component';
import { UserNewPostComponent } from './user-new-post/user-new-post.component';
import { LoginOptComponent } from './login-opt/login-opt.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserDashboardComponent,
    UserProfileComponent,
    UserPostCategoryComponent,
    UserPostEditComponent,
    UserPostCreateComponent,
    HomeComponent,
    UserSinglePostComponent,
    UserNewPostComponent,
    LoginOptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatStepperModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
