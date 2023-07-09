import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UsersService } from '../users/users.service';
import { CommentsService } from '../comments/comments.service';
import { PostsService } from '../posts/posts.service';
import { CategoriesService } from '../categories/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  private name: string = "";
  private idName: string = "";

  constructor(private buttonComponent: ButtonComponent, private userService: UsersService, private commentsService: CommentsService, 
    private postsService: PostsService, private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute) {}
  @Input() data: any[] = [];
  dataValues: any[] = [];
  ControlDataName: String = "";

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getObjectValues(obj: any): any[] {
    return Object.values(obj);
  }

  ngOnInit() {
    if((this.getObjectKeys(this.data[1])).includes("username") === true){
      this.ControlDataName = "User List";
      this.idName = "UserId"}
    else if((this.getObjectKeys(this.data[1])).includes("commentId") === true){
      this.ControlDataName = "Comment List";
      this.idName = "CommentId"}
    else if((this.getObjectKeys(this.data[1])).includes("viewCount") === true){
      this.ControlDataName = "Post List";
      this.idName = "PostId" }
    else {
      this.ControlDataName = "Category List";
      this.idName = "CategoryId"}

    }
  
  handleDeleteClick(id: number){}

  handleEditClick(id: number){}


}
