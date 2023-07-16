import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateCommentsComponent } from './create-comments/create-comments.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    CreatePostComponent,
    CreateUserComponent,
    CreateCategoryComponent,
    CreateCommentsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CreateModule {
  
 }
