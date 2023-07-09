import { Component } from '@angular/core';
import { Posts } from 'src/app/interfaces';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: Posts[] = [];
  keys: Posts[] = [];

 constructor(private postsService: PostsService) {
    this.posts = this.postsService.getPostsList();  
  }

}