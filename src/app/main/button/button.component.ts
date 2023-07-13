import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string ="";
  @Input() item: any;
  @Output() onButtonClick = new EventEmitter<number>();
  
  handleButtonClick(item: any) {
    this.onButtonClick.emit(item);
  }
}
