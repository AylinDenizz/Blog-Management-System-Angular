import { Component } from '@angular/core';
import { PostWithoutContent, Posts } from 'src/app/interfaces';
import { PostsService } from './posts.service';
import { CreateService } from 'src/app/create/create.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  postsList: Posts[] = [];
  postsListWithoutContent: PostWithoutContent[] = [];
  postsListName: string = 'postsList';

  constructor(private postsService: PostsService, private createService: CreateService) {
    this.postsList = this.createService.getDataList(this.postsList, this.postsListName);
    this.removeContent(this.postsList);
  }

  removeContent(postsList: Posts[]): void {
    for (const post of postsList) {
      const { content, ...rest } = post;
      this.postsListWithoutContent.push(rest);
    }
  }
}
