import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility-nav',
  templateUrl: './accessibility-nav.component.html',
  styleUrls: ['./accessibility-nav.component.css']
})
export class AccessibilityNavComponent {

  changeTheme(){
    document.body.classList.toggle('dark');
  }

  changeSize(){
    document.body.classList.toggle('plus');
  }

}
