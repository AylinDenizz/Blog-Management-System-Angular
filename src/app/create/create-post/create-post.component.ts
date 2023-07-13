import { Component } from '@angular/core';
import { Posts, Users } from 'src/app/interfaces';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/main/categories/categories.service';
import { CreateService } from '../create.service';
import { PostsService } from 'src/app/main/posts/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  
  postsList: Posts[] = []
  dataCount: number = 0
  postsListName = "postsList"
  userListName: string = 'usersList';

  post: Posts = {
    postId: 0,
    userId: 0,
    categoryId: 0,
    title: "",
    content: "",
    viewCount: 0,
    creationDate: "",
    isPublished: false
  };

  usersList: Users[] = [];

  
  constructor(private categoriesService: CategoriesService, private router: Router, private createService: CreateService, private postsService: PostsService){
    this.postsList = this.createService.getDataList(this.postsList, this.postsListName);
    this.dataCount = this.postsList.length;
    this.post.postId = this.postsList[this.postsList.length - 1].postId + 1;
    this.usersList = this.createService.getDataList(this.usersList, this.userListName);

  };

  handleCreateClick() {
    if (this.post.title === "" || this.post.content === "" || this.post.creationDate === "") {
      alert("Fill in the empty fields.");
    } else {
        this.postsList.push(this.post);
        console.log(this.postsList);
        this.createService.setDataList(this.postsList, this.postsListName);
        this.postsList = this.createService.getDataList(this.postsList, this.postsListName);
        this.router.navigateByUrl("/posts");
      }
    }
  handleCancelClick() {
    this.router.navigateByUrl("/posts")
  };
}
