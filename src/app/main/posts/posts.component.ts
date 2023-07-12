import { Component } from '@angular/core';
import { Posts } from 'src/app/interfaces';
import { PostsService } from './posts.service';
import { CreateService } from 'src/app/create/create.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  postsList: Posts[] = [];
  postsListName: string = 'postsList';

 constructor(private postsService: PostsService,  private createService: CreateService) {
  this.postsList = this.createService.getDataList(this.postsList, this.postsListName);
  }

}