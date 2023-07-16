import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateService } from 'src/app/create/create.service';
import { Comments, Posts, Users } from 'src/app/interfaces';

@Component({
  selector: 'app-detail-comment',
  templateUrl: './detail-comment.component.html',
  styleUrls: ['./detail-comment.component.css']
})
export class DetailCommentComponent {
  usersList: Users[] = [];
  postsList: Posts[] = [];
  commentsList: Comments[] = [];
  commentListName = "commentsList";
  userListName = "usersList";
  postListName = "postsList";

  comment: Comments = {
    commentId: 0,
    postId: 0,
    userId: 0,
    comment: "",
    commentCreationDate: "",
    isConfirmed: false,
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private createService: CreateService
  ) {
    this.usersList = this.createService.getDataList(this.usersList, this.userListName);
      this.commentsList = this.createService.getDataList(this.commentsList, this.commentListName);
  }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.commentsList = this.createService.getDataList(this.commentsList, this.commentListName);
      const id = params['id'];
      this.comment = this.commentsList.find(comment => comment.commentId === Number(id))!;
    })
  }
}
