import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './main/categories/categories.component';
import { PostsComponent } from './main/posts/posts.component';
import { UsersComponent } from './main/users/users.component';
import { CommentsComponent } from './main/comments/comments.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { HomepageComponent } from './main/homepage/homepage.component';




const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '**', component: NotFoundComponent}


];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }