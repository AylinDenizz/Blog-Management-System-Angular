import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { TableService } from '../table/table.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() item: any;
  @Input() data: any[]= [];
  itemId: number = 0;
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();

  constructor(){};

   
  

  saveChanges() {
    // Emit the updated item to the parent component
    this.onSave.emit(this.item);
  }
}

