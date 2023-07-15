import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableService } from '../table/table.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() item: any;
  @Input() data: any[]= [];
  id: number = 0;
  @Output() onSave = new EventEmitter<number>();

  constructor(public tableService: TableService){ 
  
  };
   
  saveChanges() {
    // Emit the updated item to the parent component
    this.onSave.emit(this.item);
  }
  cancelChanges() {

  }
}

