import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './main/categories/categories.component';
import { PostsComponent } from './main/posts/posts.component';
import { UsersComponent } from './main/users/users.component';
import { CommentsComponent } from './main/comments/comments.component';

import { HomepageComponent } from './main/homepage/homepage.component';
import { CreateUserComponent } from './create/create-user/create-user.component';
import { CreateCategoryComponent } from './create/create-category/create-category.component';
import { CreateCommentsComponent } from './create/create-comments/create-comments.component';
import { CreatePostComponent } from './create/create-post/create-post.component';




const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/createcategory', component: CreateCategoryComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/createpost', component: CreatePostComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/createuser', component: CreateUserComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'comments/createcomment', component: CreateCommentsComponent},
  {path: 'home', component: HomepageComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full' }, 


];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }