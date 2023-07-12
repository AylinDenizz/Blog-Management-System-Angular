import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './main/categories/categories.component';
import { PostsComponent } from './main/posts/posts.component';
import { UsersComponent } from './main/users/users.component';
import { CommentsComponent } from './main/comments/comments.component';

import { HomepageComponent } from './main/homepage/homepage.component';
import { CreateUserComponent } from './create/create-user/create-user.component';




const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/createuser', component: CreateUserComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'home', component: HomepageComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full' }, 


];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }