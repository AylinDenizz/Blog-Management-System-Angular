import { Component } from '@angular/core';
import { CommentsService } from './comments.service';
import { Comments } from 'src/app/interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments: Comments[] = [];
  keys: Comments[] = [];
  constructor(private commentsService: CommentsService) {
    this.comments = this.commentsService.getCommentsList();  
  }

}

