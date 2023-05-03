import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _router:Router) {}

  onLogout(){
    localStorage.removeItem('user')
    localStorage.removeItem('categoryId')
    this._router.navigate(['/'])
  }
}
