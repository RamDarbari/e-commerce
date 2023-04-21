import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddproductsService } from '../services/addproduct.service';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  cartList: any
  constructor(private _product: AddproductsService, private _route: Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    try {
      let userInfo = localStorage.getItem("user");
      let { token } = JSON.parse(userInfo!);
      this._product.getCart(token).subscribe(result => {
        this.cartList = result;
        // if (this.cartList.length === 0) {
        //   this._route.navigate(['/admin']);
        // }
      });      
    } catch (error) {
      console.log(error);
    }
  }
  deleteItem(itemId: string){
    try{
      let userInfo = localStorage.getItem("user");
      let { token } = JSON.parse(userInfo!)
      this._product.deleteCartItems(token, itemId).subscribe(()=>{
        const itemIndex = this.cartList.items.findIndex((item: any) => item.itemId === itemId);
         if (itemIndex > -1) {
         this.cartList.items.splice(itemIndex, 1);
        }
        this.getCartItems()
      })
    }catch(error){
        console.log(error);
    }
  }
  
}

