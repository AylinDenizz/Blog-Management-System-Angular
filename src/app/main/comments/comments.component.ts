import { Component } from '@angular/core';
import { CommentsService } from './comments.service';
import { Comments } from 'src/app/interfaces';
import { CreateService } from 'src/app/create/create.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  commentsList: Comments[] = [];
  commentsListName: string = 'commentsList';
  constructor(private commentsService: CommentsService,  private createService: CreateService) {
    this.commentsList = this.createService.getDataList(this.commentsList, this.commentsListName); 
  }

}

