import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeTab: string = '';

  toggleSlide(tab: string): void {
    if (this.activeTab === tab) {
      this.activeTab = '';
    } else {
      this.activeTab = tab;
    }
  }
}
