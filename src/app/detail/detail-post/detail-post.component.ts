import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateService } from 'src/app/create/create.service';
import { Categories, Comments, Posts, Users } from 'src/app/interfaces';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent {
  postsList: Posts[] = []
  postListName = "postsList"
  usersList: Users[] =[];
  userListName: string = 'usersList';
  commentsList: Comments[] = [];
  commentListName: string = 'commentsList';
  categoriesList: Categories[] = [];
  categoryListName: string = 'categoriesList';

  selectedPost: Posts = {
    postId: 0,
    userId: 0,
    categoryId: 0,
    title: "",
    content: "",
    viewCount: 0,
    creationDate: "",
    isPublished: false
  };

  postsUser: Users = {
    userId: 0,
    username:"",
    email: "",
    creationDate:"",
    isActive: false
  };
  postsComments: Comments[] = [];

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
      private createService: CreateService,
      public detailService: DetailService,
      private router: Router
    ) {
      this.usersList = this.createService.getDataList(this.usersList, this.userListName);
      this.categoriesList = this.createService.getDataList(this.categoriesList, this.categoryListName);
      this.commentsList = this.createService.getDataList(this.commentsList, this.commentListName);
    }
   
    ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        this.postsList = this.createService.getDataList(this.postsList, this.postListName);
          const id = params['id'];
          this.selectedPost = this.postsList.find(post => post.postId === Number(id))!;
          this.postsUser = this.usersList.find(user => user.userId === this.selectedPost.userId)!;
          for(let comment of this.commentsList) {
            if(comment.postId === this.selectedPost.postId) {
              this.postsComments.push(comment);
            }
        } 
      })
    }
} 
          
  

