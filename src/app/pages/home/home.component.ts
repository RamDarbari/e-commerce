import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { product } from 'src/app/data';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AddproductsService } from '../services/addproduct.service';
// import { ProductDetailsComponent } from '../product-details/product-details.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: product[] = [];
  itemId!: string;
  quantity = 1;
  private cartCount = new BehaviorSubject<number>(0);
  currentCartCount = this.cartCount.asObservable();
  
  constructor(private _product: AddproductsService, private _elementRef: ElementRef, private _route: Router, private toastr: ToastrService) { }



  ngOnInit(): void {
    this.getProducts();
  }

  

  getProducts() {
    try {
      this._product.productList().subscribe((result) => {
        if (result) {
          this.productList = result;
        }
      });
    } catch (error) {
      console.log(error);
    }

  }
  scrollToProducts(): void {
    const productsTop = this._elementRef.nativeElement.querySelector('#products').offsetTop;
    window.scrollTo({
      top: productsTop,
      behavior: "smooth"
    });
  }



  addToCart(itemId: string) {
    let quantity : number =  Number((<HTMLInputElement>document.getElementById(itemId)).value);
    try {
      let userInfo = localStorage.getItem("user")
      let { token } = JSON.parse(userInfo!)
      // console.log(itemId, quantity)
      let data = { itemId: itemId, quantity: quantity }
      this._product.addToCart(data, token)
        .subscribe(res => {
          console.log(res);
          // alert('added succesfully')
          this.toastr.success('Product added succesfully')
        });
    } catch (error) {
      console.log(error);
    }
  }


  increaseQuantity(_id: string) {
   let a : number =  Number((<HTMLInputElement>document.getElementById(_id)).value);
    a=a+1;
    let x: number =a;
   (<HTMLInputElement>document.getElementById(_id)).value = x.toString();
  }

  decreaseQuantity(_id: string) {
    let a : number =  Number((<HTMLInputElement>document.getElementById(_id)).value);
    if(a>1){
    a=a-1;
    let x: number =a;
   (<HTMLInputElement>document.getElementById(_id)).value = x.toString();}
  }
   

}

