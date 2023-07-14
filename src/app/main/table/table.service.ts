import { Injectable } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UsersService } from '../users/users.service';
import { CommentsService } from '../comments/comments.service';
import { CategoriesService } from '../categories/categories.service';
import { ActivatedRoute } from '@angular/router';
import { CreateService } from 'src/app/create/create.service';
import { Comments, Posts } from 'src/app/interfaces';
import { PostsService } from '../posts/posts.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  postsListName = "postsList"
  userListName: string = 'usersList';
  id: number = 0;

  postsList: Posts[] = [];
  commentListName = "commentsList";
  commentsList: Comments[] = [];

  constructor(private buttonComponent: ButtonComponent, private userService: UsersService, private commentsService: CommentsService, 
    private postsService: PostsService, private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute, 
    private createService: CreateService) { }

  CommentExist($event: any): boolean {
    this.id=$event.userId;
    if (this.createService.getDataList(this.commentsList, this.commentListName ).filter((comment) => comment.userId === this.id).length !== 0)
      return true;
    else
      return false;
  }

  PostExist($event: any): boolean {
    this.id=$event.userId;
    if (this.createService.getDataList(this.postsList, this.postsListName ).filter((post) => post.userId ===this.id).length !== 0)
      return true;
    else
      return false;
  }
}
