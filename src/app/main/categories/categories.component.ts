import { Component } from '@angular/core';
import { Categories } from 'src/app/interfaces';
import { CategoriesService } from './categories.service';
import { CreateService } from 'src/app/create/create.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoriesList: Categories[] = [];
  categoriesListName: string = 'categoriesList';

  constructor(private categoriesService: CategoriesService,private createService: CreateService ) { 
    this.categoriesList = this.createService.getDataList(this.categoriesList, this.categoriesListName);
   }
}
