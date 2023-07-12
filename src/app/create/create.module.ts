import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    CreatePostComponent,
    CreateUserComponent,
    CreateCategoryComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CreateModule {
  
 }
