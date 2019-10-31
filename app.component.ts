import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  navArray: string[] = ['blog', 'shop','...'];
  selectedButton: string;

  
  setSwitch(string) {
    this.selectedButton = string;
  }
}
