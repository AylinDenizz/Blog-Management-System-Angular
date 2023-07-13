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

  usersList: Users[] = [];
  usersListName: string = "usersList"

  constructor(private usersService: UsersService,  private createService: CreateService) {
    this.createService.setDataList(this.usersList, this.usersListName);
    this.usersList = this.createService.getDataList(this.usersList, this.usersListName);
    
  }
}
