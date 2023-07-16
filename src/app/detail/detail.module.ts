import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { DetailUserComponent } from './detail-user/detail-user.component';




@NgModule({
  declarations: [
    DetailCategoryComponent,
    DetailCommentComponent,
    DetailPostComponent,
    DetailUserComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DetailModule { }
