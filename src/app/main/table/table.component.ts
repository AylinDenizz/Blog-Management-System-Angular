import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UsersService } from '../users/users.service';
import { CommentsService } from '../comments/comments.service';
import { CategoriesService } from '../categories/categories.service';
import { ActivatedRoute } from '@angular/router';
import { CreateService } from 'src/app/create/create.service';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {



  constructor(private buttonComponent: ButtonComponent, private userService: UsersService, private commentsService: CommentsService, private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute, 
    private createService: CreateService, private tableService: TableService) { }
    

  @Input() data: any[] = [];
  editMode: boolean= false;
  controlDataName: string = "";
  localStorageDataName: string = "";
  id: number = 0;

  getObjectKeys(obj: any): any[] {
    return Object.keys(obj);
  }

  getObjectValues(obj: any): any[] {
    return Object.values(obj);
  }
  
  handleRowClick(item: any) {
    item.editMode = true;
  }

  ngOnInit() {
    this.createService.setDataList(this.data,  this.localStorageDataName);
    this.data = this.createService.getDataList(this.data, this.localStorageDataName);

    if((this.getObjectKeys(this.data[1])).includes("username") === true){
      this.controlDataName = "User List";
      this.localStorageDataName = "usersList";} 
    else if((this.getObjectKeys(this.data[1])).includes("commentId") === true){
      this.controlDataName = "Comment List";
      this.localStorageDataName = "commentsList";}
    else if((this.getObjectKeys(this.data[1])).includes("viewCount") === true){
      this.controlDataName = "Post List";
      this.localStorageDataName = "postsList";}
    else {
      this.controlDataName = "Category List";
      this.localStorageDataName = "categoriesList";
    }
    }
  
  handleDeleteClick($event: any){  
    if(this.data.length === 1)
      alert("You shall not delete last element.")
    else {
      if((this.getObjectKeys(this.data[1])).includes("username") === true){
        if (this.tableService.PostExist($event) === true)
          alert("You cannot delete a user with post.");
        else if (this.tableService.CommentExist($event) === true)
          alert("You cannot delete a user with comment.");
        else {
          this.id=$event.userId;
          this.data = this.data.filter((item) => item.userId !== this.id);}}
      else if((this.getObjectKeys(this.data[1])).includes("commentId") === true){
        this.id=$event.commentId;
        this.data = this.data.filter((item) => item.commentId !== this.id);}
      else if((this.getObjectKeys(this.data[1])).includes("viewCount") === true){
        if (this.tableService.CommentExist($event) === true)
          alert("You cannot delete a post with comment.");
        else {
        this.id=$event.postId;
        this.data = this.data.filter((item) => item.postId !== this.id);}}
      else if((this.getObjectKeys(this.data[1])).includes("name") === true){
        this.id=$event.category_id;
        this.data = this.data.filter((item) => item.category_id !== this.id);}
    }
    this.createService.setDataList(this.data,  this.localStorageDataName);
    this.createService.getDataList(this.data,  this.localStorageDataName);
  }

  handleEditClick(id: number ){
    this.editMode = true;
  }

  handleSaveClick(id: number) {
    this.editMode = !this.editMode;

  }

  handleCancelClick(id: number) {}


}
