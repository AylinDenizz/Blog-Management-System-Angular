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
  @Input() basedata: any[] = [];
  editMode: boolean= false;
  controlDataName: string = "";
  localStorageDataName: string = "";
  id: number = 0;
  selectedItem: any;
  selectedRowIndex: number | null = null; 
  showEditPopup: boolean = false;
  pageIndex: number = 0 ;
  pageSize: number = 15 ;
  LastPageIndex: number = 0;
  remainingItemAmount: number = 0;

  ngOnInit() {
// setting and getting datas 
    this.showEditPopup = false;
    this.selectedRowIndex = null;
    this.createService.setDataList(this.data,  this.localStorageDataName);
    this.data = this.createService.getDataList(this.data, this.localStorageDataName);
//pagination
    this.LastPageIndex = (this.data.length /this.pageSize) ;
    this.LastPageIndex = Math.floor(this.LastPageIndex);
    this.remainingItemAmount = this.data.length % this.pageSize ; 
    if(this.remainingItemAmount>0 && this.LastPageIndex > 0 ) {
      this.LastPageIndex = this.LastPageIndex +1;
    }
    else
      this.LastPageIndex = this.LastPageIndex;

//make datas change according to the items they contain.
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
  // last item is not not able to delete.
    if(this.data.length === 1)
      alert("You shall not delete last element.")
    else {

  //item data types is changing as mentioned above. If there is username in table, data is became user list.
      if((this.tableService.getObjectKeys(this.data[1])).includes("username") === true){
        if (this.tableService.PostExist($event) === true)
          alert("You cannot delete a user with post.");
        else if (this.tableService.CommentExist($event) === true)
          alert("You cannot delete a user with comment.");
        else {
          this.id=$event.userId;
          this.data = this.data.filter((item) => item.userId !== this.id);}}
  //If there is commentId in table, data is became comment list.
      else if((this.tableService.getObjectKeys(this.data[1])).includes("commentId") === true){
        this.id=$event.commentId;
        this.data = this.data.filter((item) => item.commentId !== this.id);}
  //If there is viewCount in table, data is became post list.
      else if((this.tableService.getObjectKeys(this.data[1])).includes("viewCount") === true){
        if (this.tableService.CommentExist($event) === true)
          alert("You cannot delete a post with comment.");
  //other datas are category list for those who don't have a determining feature. 
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


  
  openEditPopup(item: any, index: number) {
    this.selectedItem = { ...item }; 
    this.showEditPopup = true;
    this.selectedRowIndex = index;
  }

 
  saveChanges(updatedItem: any) {
    const index = this.data.findIndex((item) => item === this.selectedItem);
    if (index !== -1) {
      this.data[index] = updatedItem;
    }
    this.showEditPopup = false;
    this.selectedRowIndex = null;
  }

  cancelPopup( baseItem: any) {
    const index = this.data.findIndex((item) => item === this.selectedItem);
    if (index !== -1) {
      this.data[index] = baseItem;
    }
    this.createService.setDataList(this.data,  this.localStorageDataName);
    this.data = this.createService.getDataList(this.data, this.localStorageDataName);
    this.showEditPopup = false;

  }

  nextPage(pageIndex: number) {
    if(pageIndex < (this.LastPageIndex -1) ) {
      pageIndex ++;
    }     
    this.pageIndex = pageIndex;
    
  }

  previousPage(pageIndex: number) {
    if(pageIndex > 0) {
      pageIndex = pageIndex -1
    }
    this.pageIndex = pageIndex;

  }

}

