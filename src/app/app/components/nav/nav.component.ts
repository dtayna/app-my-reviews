import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  changeTheme(){
    document.body.classList.toggle('dark');
  }

  changeSize(){
    document.body.classList.toggle('plus');
  }

}
