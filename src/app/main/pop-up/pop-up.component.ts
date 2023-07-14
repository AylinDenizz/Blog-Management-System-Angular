import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() item: any;
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  saveChanges() {
    // Emit the updated item to the parent component
    this.onSave.emit(this.item);
  }

  Cancel() { 
    this.onCancel.emit(this.item);
  }
}
