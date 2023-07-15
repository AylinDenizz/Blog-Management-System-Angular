import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableService } from '../table/table.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() selectedItem: any;
  @Input() baseItem: any;
  @Input() data: any[]= [];
  id: number = 0;
  @Output() onSave = new EventEmitter<number>();
  @Output() onCancel = new EventEmitter<number>();

  constructor(public tableService: TableService){ 
  
  };
   
  saveChanges() {
    this.onSave.emit(this.selectedItem);
  }
  cancelChanges() {
    this.onCancel.emit( this.baseItem);
  }
}

