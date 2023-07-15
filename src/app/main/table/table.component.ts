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

  constructor(private buttonComponent: ButtonComponent, 
    private userService: UsersService, 
    private commentsService: CommentsService, 
    private categoriesService: CategoriesService, 
    private activatedRoute: ActivatedRoute, 
    private createService: CreateService, 
    public tableService: TableService
    ) {}
    

  @Input() data: any[] = [];
  editMode: boolean= false;
  controlDataName: string = "";
  localStorageDataName: string = "";
  id: number = 0;
  selectedItem: any;
  selectedRowIndex: number | null = null; 


  
  handleRowClick(item: any, index: number) {
    item.editMode = true;
    this.selectedRowIndex = index;
  }

  ngOnInit() {
    this.createService.setDataList(this.data,  this.localStorageDataName);
    this.data = this.createService.getDataList(this.data, this.localStorageDataName);

    if((this.tableService.getObjectKeys(this.data[1])).includes("username") === true){
      this.controlDataName = "User List";
      this.localStorageDataName = "usersList";} 
    else if((this.tableService.getObjectKeys(this.data[1])).includes("commentId") === true){
      this.controlDataName = "Comment List";
      this.localStorageDataName = "commentsList";}
    else if((this.tableService.getObjectKeys(this.data[1])).includes("viewCount") === true){
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
      if((this.tableService.getObjectKeys(this.data[1])).includes("username") === true){
        if (this.tableService.PostExist($event) === true)
          alert("You cannot delete a user with post.");
        else if (this.tableService.CommentExist($event) === true)
          alert("You cannot delete a user with comment.");
        else {
          this.id=$event.userId;
          this.data = this.data.filter((item) => item.userId !== this.id);}}
      else if((this.tableService.getObjectKeys(this.data[1])).includes("commentId") === true){
        this.id=$event.commentId;
        this.data = this.data.filter((item) => item.commentId !== this.id);}
      else if((this.tableService.getObjectKeys(this.data[1])).includes("viewCount") === true){
        if (this.tableService.CommentExist($event) === true)
          alert("You cannot delete a post with comment.");
        else {
        this.id=$event.postId;
        this.data = this.data.filter((item) => item.postId !== this.id);}}
      else if((this.tableService.getObjectKeys(this.data[1])).includes("name") === true){
        this.id=$event.category_id;
        this.data = this.data.filter((item) => item.category_id !== this.id);}
        
    }

    console.log(this.id);
    this.createService.setDataList(this.data,  this.localStorageDataName);
    this.createService.getDataList(this.data,  this.localStorageDataName);
  }

  handleCancelClick(id: number) {}
  showEditPopup: boolean = false;



  // Function to open the edit pop-up and pass the selected item
  openEditPopup(item: any, index: number) {
    this.selectedItem = { ...item }; // Create a copy of the item to avoid modifying the original data
    this.showEditPopup = true;
    this.selectedRowIndex = index;
  }

  // Function to save the changes from the edit pop-up
  saveChanges(updatedItem: any) {
    // Find the index of the updated item in the data array
    const index = this.data.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      // Update the item in the data array with the modified values
      this.data[index] = updatedItem;
    }
    this.showEditPopup = false; // Close the edit pop-up
  }
}

