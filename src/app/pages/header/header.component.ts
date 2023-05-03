import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddproductsService } from '../services/addproduct.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _router: Router, private _product: AddproductsService){}


  clickToGetCart(){
      
  }
  onLogout(){
    try{
      localStorage.removeItem('user')
      localStorage.removeItem('categoryId')
      this._router.navigate(['/'])

    }
  catch(error){
    console.log(error);
      
    }
  }
}
