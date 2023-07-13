import { Component } from '@angular/core';
import { Categories } from 'src/app/interfaces';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/main/categories/categories.service';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  
  categoriesList: Categories[] = []
  dataCount: number = 0
  categoryListName = "categoriesList"

  category: Categories ={
    category_id: 0,
    name: "",
    creation_date: "",
  };


  constructor(private categoriesService: CategoriesService, private router: Router, private createService: CreateService){
    this.categoriesList = this.createService.getDataList(this.categoriesList, this.categoryListName);
    this.dataCount = this.categoriesList.length;
    this.category.category_id = this.categoriesList[this.categoriesList.length - 1].category_id + 1;
  };

  handleCreateClick() {
    if ( this.category.name === "" || this.category.creation_date === "") {
      alert("Fill in the empty fields.");
    } else {
      let nameExists = false;
      for (let i = 0; i < this.categoriesList.length; i++) {
        if (Object.values(this.categoriesList[i]).includes(this.category.name)) {
          nameExists = true;
          break;
        }
      }
      console.log(this.categoriesList);
      this.createService.setDataList(this.categoriesList, this.categoryListName);
      this.categoriesList = this.createService.getDataList(this.categoriesList, this.categoryListName);
      this.router.navigateByUrl("/users");
      this.categoriesList.push(this.category);
    }
  }

  handleCancelClick() {
    this.router.navigateByUrl("/users")
  };
}

