import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    CommentsComponent,
    UsersComponent,
    CategoriesComponent,
    PostsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
