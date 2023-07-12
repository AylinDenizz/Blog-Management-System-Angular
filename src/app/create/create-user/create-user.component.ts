import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces';
import { UsersService } from 'src/app/main/users/users.service';
import { CreateService } from '../create.service';
import { UsersComponent } from 'src/app/main/users/users.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  usersList: Users[] =[];
  user: Users = {
    userId: 0,
    username:"",
    email: "",
    creationDate:"",
    isActive: false
  };
  userListName: string = "usersList";
  
  constructor(private usersService: UsersService, private router: Router, private createService: CreateService ){
    this.usersList = this.usersService.getUsersList(this.usersList, "userslist");
    
  };

  handleCreateClick() {
  
    //this.user.userId =  Number(this.usersList[Number(this.usersList.length) - 1].userId) + 1;
    const dataCount = Number(this.usersList.length);
    if (dataCount > 0) {
      const lastIndex = dataCount - 1;
      this.user.userId = Number(this.usersList[lastIndex].userId) + 1;
    } else {
  //first user's userId entered 1
      this.user.userId = 1; 
    }
    if(this.user.username === "" || this.user.email === "" || this.user.creationDate === "")
      alert("Fill the empty spaces.")
    else if(this.createService.checkUnique(this.usersList,this.user.username,this.user.email,this.user.userId)===false)
      alert("This user already exist.")
    else {
      this.usersList.push(this.user);
      this.usersService.setUsersList(this.usersList, this.userListName);
      console.log
      this.router.navigateByUrl('/users');
      this.usersList = JSON.parse(localStorage.getItem(this.userListName) || '{}');
      console.log(this.usersList);
    }
  };
  handleCancelClick() {
    this.router.navigateByUrl("/users")
  };
}
