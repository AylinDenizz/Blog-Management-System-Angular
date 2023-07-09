import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { DetailPostComponent } from './detail-post/detail-post.component';



@NgModule({
  declarations: [
    DetailCategoryComponent,
    DetailCommentComponent,
    DetailPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailModule { }
