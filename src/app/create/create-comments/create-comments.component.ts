import { Component } from '@angular/core';
import { Comments, Posts, Users } from 'src/app/interfaces';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/main/categories/categories.service';
import { CreateService } from '../create.service';
import { CommentsService } from 'src/app/main/comments/comments.service';
import { PostsService } from 'src/app/main/posts/posts.service';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.css']
})
export class CreateCommentsComponent {
  usersList: Users[] = [];
  postsList: Posts[] = [];
  commentsList: Comments[] = [];
  commentListName = "commentsList";
  userListName = "usersList";
  postsListName = "postsList";
  dataCount = 0;
  comment: Comments = {
    commentId: 0,
    postId: 0,
    userId: 0,
    comment: "",
    commentCreationDate: "",
    isConfirmed: false,
  }

  constructor(private categoriesService: CategoriesService, private router: Router, private createService: CreateService,
    private postsService: PostsService, private commentsService:CommentsService){
    this.commentsList = this.createService.getDataList(this.commentsList, this.commentListName);
    this.dataCount = this.commentsList.length;
    this.comment.postId = this.commentsList[this.commentsList.length - 1].postId + 1;
    this.postsList = this.createService.getDataList(this.postsList, this.postsListName);
    this.usersList = this.createService.getDataList(this.usersList, this.userListName);
  };

    
  handleCreateClick() {
    if (this.comment.comment === "" || this.comment.commentCreationDate === "" ) {
      alert("Fill in the empty fields.");
    } else {
        this.commentsList.push(this.comment);
        console.log(this.commentsList);
        this.createService.setDataList(this.commentsList, this.commentListName);
        this.commentsList = this.createService.getDataList(this.commentsList, this.commentListName);
        this.router.navigateByUrl("/comments");

      }
    }


  handleCancelClick() {
    this.router.navigateByUrl("/comments")
  };
}

