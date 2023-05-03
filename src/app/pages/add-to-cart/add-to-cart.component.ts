import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddproductsService } from '../services/addproduct.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  cartList: any
  checkOutMessage: any
  constructor(private _product: AddproductsService, private _route: Router, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    try {
      let userInfo = localStorage.getItem("user");
      let { token } = JSON.parse(userInfo!);
      this._product.getCart(token).subscribe(result => {
        this.cartList = result;
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
  checkout(){
    try{
      let userInfo = localStorage.getItem("user");
      let { token } = JSON.parse(userInfo!)
      this._product.checkOut(token).subscribe((result) => {
        this.cartList = []; // Clear the productList array
        this.checkOutMessage = result;
        this.getCartItems()
        console.log(result);
        this._route.navigate(['/admin']);
        this._toastr.success(result.thankYouMessage);
      });
    }catch(error){
      console.log(error);
    }
  }

  
}

