import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from 'src/app/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: Users[] = [];
  keys: Users[] = [];
  userName: string = "usersList"

  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsersList(this.users, this.userName);
    
  }
}
