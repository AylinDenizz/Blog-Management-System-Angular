import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText: string ="";
  @Input() item: any;
  @Input() index: any;
  @Output() onButtonClick = new EventEmitter<number>();
  
  handleButtonClick(item: any, index: number) {
    this.onButtonClick.emit(item);
    this.onButtonClick.emit(index+1);
  }
}
