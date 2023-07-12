import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from 'src/app/interfaces';
import { CreateService } from 'src/app/create/create.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: Users[] = [];
  keys: Users[] = [];
  userName: string = "usersList"

  constructor(private usersService: UsersService,  private createService: CreateService) {
    this.users = this.createService.getDataList(this.users, this.userName);
    
  }
}
