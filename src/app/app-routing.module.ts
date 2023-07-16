import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './main/categories/categories.component';
import { CommentsComponent } from './main/comments/comments.component';

import { HomepageComponent } from './main/homepage/homepage.component';
import { CreateUserComponent } from './create/create-user/create-user.component';
import { CreateCategoryComponent } from './create/create-category/create-category.component';
import { CreateCommentsComponent } from './create/create-comments/create-comments.component';
import { CreatePostComponent } from './create/create-post/create-post.component';
import { UsersComponent } from './main/users/users.component';
import { PostsComponent } from './main/posts/posts.component';
import { DetailCategoryComponent } from './detail/detail-category/detail-category.component';
import { DetailPostComponent } from './detail/detail-post/detail-post.component';
import { DetailUserComponent } from './detail/detail-user/detail-user.component';
import { DetailCommentComponent } from './detail/detail-comment/detail-comment.component';




const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/createcategory', component: CreateCategoryComponent},
  {path: "categories/:id", component: DetailCategoryComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/createpost', component: CreatePostComponent},
  {path: "posts/:id", component: DetailPostComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/createuser', component: CreateUserComponent},
  {path: "users/:id", component: DetailUserComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'comments/createcomment', component: CreateCommentsComponent},
  {path: "comments/:id", component: DetailCommentComponent},
  {path: 'home', component: HomepageComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full' }, 


];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }