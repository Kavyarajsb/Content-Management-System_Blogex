import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


import{MatSelectModule}from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

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
import { CategoryCreationAdminComponent } from './category-creation-admin/category-creation-admin.component';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { PostFormComponent } from './post-form/post-form.component';
import { DashboardPartComponent } from './dashboard-part/dashboard-part.component';


@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent,
    CategoryCreationAdminComponent,
    PostComponent,
    SinglePostComponent,
    CategoryViewComponent,
    UpdateCategoryComponent,
    PostFormComponent,
    DashboardPartComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    MatSidenavModule
  ]
})
export class AdminModule { }
