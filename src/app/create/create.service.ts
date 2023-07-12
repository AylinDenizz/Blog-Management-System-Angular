import { Injectable, Input } from '@angular/core';
import { Categories, Comments, Posts, Users } from '../interfaces';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  
  data: any[] = [];

  //username ve email unique    

  findElementByDataValue(data: any[] ,dataValue: string): any| undefined{
    return this.data.find((data)=> data.dataValue === dataValue )
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

  checkUnique(data: any[], dataValue: string, dataValue2: string, id: number): boolean {
    const foundItem = data.find((item) => item.username.toLowerCase() === dataValue.toLowerCase());
    const localStorageItem = localStorage.getItem(dataValue);
  
    if (foundItem && this.findElementByDataValue(data,dataValue.toLowerCase())?.hasOwnProperty(id)) {
      return false;
    } else if (localStorageItem !== null && this.findElementByDataValue(data, dataValue2.toLowerCase())?.hasOwnProperty(id)) {
      return false;
    } else {
      return true;
    }
  }
  

  getDataList(dataName: any): any[] {
    if(localStorage.getItem(dataName) !== null) 
      this.data = JSON.parse(localStorage.getItem(dataName) || '{}');
    else {
      this.setDataList(dataName);
      this.data = JSON.parse(localStorage.getItem(dataName) || '{}');
    }
    return this.data;
  }

  setDataList(dataName: any) {
    if(!localStorage.getItem(dataName))
      localStorage.setItem(dataName, JSON.stringify(dataName));
    else {
      this.data = JSON.parse(String(localStorage.getItem(String(dataName))))
    }
  };

  deleteElement(id: number): void {
    this.data = this.data.filter((data) => data.hasOwnProperty(id) !== id);
  } 

}
