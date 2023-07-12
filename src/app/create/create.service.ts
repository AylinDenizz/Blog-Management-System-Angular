import { Injectable, Input } from '@angular/core';
import { Categories, Comments, Posts, Users } from '../interfaces';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  
  data: any[] = [];
  ListName: string = '';

  //username ve email unique    

  findElementByDataValue(data: any[] ,dataValue: any): any| undefined{
    return this.data.find((item)=> item.dataValue === dataValue);
  }
  

  findValueById(data: any[][], id: number): any | null {
    for (const row of data) {
      for (const item of row) {
        if (item.hasOwnProperty('Id') && item.id === id) {
          return item.value;
        }
      } 
    }
  }
  
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getObjectValues(obj: any): any[] {
    return Object.values(obj);
  }

  setDataList(data: any[], ListName: string) {
    if(localStorage.getItem(ListName))
      localStorage.setItem(ListName, JSON.stringify(data));
    else {
      data = JSON.parse(localStorage.getItem(ListName) || '{}');
    }
  };
  
  getDataList(data: any[], ListName: string): any[] {
    if(localStorage.getItem(ListName) !== null)
      this.data = JSON.parse(localStorage.getItem(ListName) || '{}');
    else {
      this.setDataList(data, ListName);
    }
    return this.data;
  }
  

  deleteElement(id: number): void {
    this.data = this.data.filter((data) => data.hasOwnProperty(id) !== id);
  } 

}
