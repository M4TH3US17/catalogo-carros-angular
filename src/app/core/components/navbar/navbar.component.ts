import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showDropdown(): void {
    let dropdown = document.querySelector('.dropdown-menu')?.classList;

    if(dropdown?.contains('show'))  {
      dropdown?.remove('show');
      dropdown.add('close');
    }
    if(dropdown?.contains('show') === false)  dropdown?.add('show');
  }
}