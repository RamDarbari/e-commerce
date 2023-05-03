import { Component, ElementRef, OnInit, Input } from '@angular/core';
import {  product, topDeal } from 'src/app/data';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AddproductsService } from '../services/addproduct.service';
import { CardsComponent } from 'src/app/reusable-components/cards/cards.component';
// import { ProductDetailsComponent } from '../product-details/product-details.component';

interface carousalImages{
  image: string;
  imageAlt: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: product[] = [];
  itemId!: string;
  quantity = 1;
  topSelling: topDeal[] = []
 
  
  constructor(private _product: AddproductsService, private _elementRef: ElementRef, private _route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
    this.topSellingProducts()
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

  topSellingProducts(){
    try{
      this._product.topSellingProduct().subscribe((result) => {
        if (result) {
         this.topSelling = result
         console.log(result);
         console.log(this.topSelling);
          }
          });
    }catch(error){
      console.log(error);
    }
  }
  productDetails(itemId: string){
    this._route.navigate(['/admin/products'], { queryParams: { itemId } });
  }

  scrollToProducts(): void {
    const productsTop = this._elementRef.nativeElement.querySelector('#products').offsetTop;
    window.scrollTo({
      top: productsTop,
      behavior: "smooth"
    });
  }
}

