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
  userListName: string = 'usersList';
  user: Users = {
    userId: 0,
    username:"",
    email: "",
    creationDate:"",
    isActive: false
    };
    dataCount: number = 0;
   
  
  constructor(private usersService: UsersService, private router: Router, private createService: CreateService ){
    this.usersList = this.createService.getDataList(this.usersList, this.userListName);
    this.dataCount = this.usersList.length;
    this.user.userId = this.usersList[this.usersList.length - 1].userId + 1;

    
  };

  
  handleCreateClick() {
    if (this.user.username === "" || this.user.email === "" || this.user.creationDate === "") {
      alert("Fill in the empty fields.");
    } else {
      let usernameExists = false;
      let emailExists = false;
  
      for (let i = 0; i < this.usersList.length; i++) {
        if (Object.values(this.usersList[i]).includes(this.user.username)) {
          usernameExists = true;
          break;
        }
      }
  
      for (let i = 0; i < this.usersList.length; i++) {
        if (Object.values(this.usersList[i]).includes(this.user.email)) {
          emailExists = true;
          break;
        }
      }
  
      if (usernameExists) {
        alert("This username already exists.");
      } else if (emailExists) {
        alert("This email already exists.");
      } else {  
        this.usersList.push(this.user);
        console.log(this.usersList);
        this.createService.setDataList(this.usersList, this.userListName);
        this.usersList = this.createService.getDataList(this.usersList, this.userListName);
        this.router.navigateByUrl("/users");
      }
    }
  }
  


  handleCancelClick() {
    this.router.navigateByUrl("/users")
  };
}

