import { Component } from '@angular/core';
import { Categories } from 'src/app/interfaces';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  CategoriesList: Categories[] = [];

  constructor(private categoriesService: CategoriesService) { 
    this.CategoriesList = this.categoriesService.getCategoriesList() }
}
