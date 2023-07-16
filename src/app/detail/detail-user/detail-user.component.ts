import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CreateService } from 'src/app/create/create.service';
import { Comments, Posts, Users } from 'src/app/interfaces';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {
  usersList: Users[] =[];
  userListName: string = 'usersList';
  postsList: Posts[] = [];
  postListName: string = 'postsList';
  commentsList: Comments[] = [];
  commentListName: string = 'commentsList';

  selectedUser: Users = {
    userId: 0,
    username:"",
    email: "",
    creationDate:"",
    isActive: false
  };

  usersPosts: Posts[] = [];
  usersComments: Comments[] = [];

  
  selectedPost = {
    postId: 0,
    userId: 0,
    categoryId: 0,
    title: "",
    content: "",
    viewCount: 0,
    creationDate: "",
    isPublished: false
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private createService: CreateService,
    public detailService: DetailService,
    private router: Router

  ) {
    this.postsList = this.createService.getDataList(this.postsList, this.postListName);
  }
   
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.usersList = this.createService.getDataList(this.usersList, this.userListName);
        const id = params['id'];
        this.selectedUser = this.usersList.find(user => user.userId === Number(id))!;
        for(let post of this.postsList) {
          if(post.userId === this.selectedUser.userId) {
            this.usersPosts.push(post);
          }
        }
          } 
        )

}
}
