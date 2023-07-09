import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { DetailModule } from './detail/detail.module';
import { CreateModule } from './create/create.module';
import { NavbarComponent } from './main/navbar/navbar.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { UsersComponent } from './main/users/users.component';
import { TableComponent } from './main/table/table.component';
import { PostsComponent } from './main/posts/posts.component';
import { CommentsComponent } from './main/comments/comments.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { ButtonComponent } from './main/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    TableComponent,
    PostsComponent,
    CommentsComponent,
    CategoriesComponent,
    UsersComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetailModule,
    CreateModule,
    MainModule,

  ],
  providers: [ButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
