import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreteUserComponent } from './crete-user/crete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    CreatePostComponent,
    CreteUserComponent,
    CreateUserComponent,
    CreateCategoryComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreateModule { }
