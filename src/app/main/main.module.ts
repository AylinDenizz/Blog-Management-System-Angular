import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage/homepage.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [ 
  
    HomepageComponent, PopUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class MainModule { }