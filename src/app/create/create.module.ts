import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCategoryComponent } from './create-category/create-category.component';





@NgModule({
  declarations: [
    CreatePostComponent,
    CreateUserComponent,
    CreateCategoryComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class CreateModule {
  
 }
