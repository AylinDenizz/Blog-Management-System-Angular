
import { Injectable } from '@angular/core';
import { Categories } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesList: Categories[] = [
    {
      category_id: 1,
      name: "Music",
      creation_date: "14.06.2015"
    },
    {
      category_id: 2,
      name: "Art",
      creation_date: "23.12.2011"
    },
    {
      category_id: 3,
      name: "Movie",
      creation_date: "23.05.2012"
    },
    {
      category_id: 4,
      name: "Game",
      creation_date: "15.07.2011"
    },
    {
      category_id: 5,
      name: "Literature",
      creation_date: "4.07.2016"
    }
  ]
  constructor() { }

  setCategoriesList() {
    if(!localStorage.getItem('categoriesList'))
      localStorage.setItem('categoriesList', JSON.stringify(this.categoriesList));
    else {
      this.categoriesList = JSON.parse(String(localStorage.getItem(String(this.categoriesList))))
    }
  };
  
  getCategoriesList(): Categories[] {
    if(localStorage.getItem('categoriesList') !== null)
      this.categoriesList = JSON.parse(localStorage.getItem('categoriesList') || '{}');
    else {
      this.setCategoriesList();
    }
    return this.categoriesList;
  }
}

