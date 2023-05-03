import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/authentications/services/auth.service';
import { product } from 'src/app/data';
import { AddproductsService } from '../services/addproduct.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // productData: undefined | product
  // loggedInUser: any;
  // addProductMessage: string | undefined;
  // productList: product[] = [];

  // constructor(private _authService: AuthService, private _product: AddproductsService) { }

  // ngOnInit(): void {
  //   this.loggedInUser = this._authService.getCurrentUser();
  //   this.getProducts();
  // }

  // onSubmit(data: product, addProduct: NgForm) {
  //   try{
  //     this._product.addProduct(data).subscribe((result) => {
  //       console.log(result);
  //       if (result) {
  //         this.addProductMessage = 'Product is added successfully';
  //       }
  //     });
  //     setTimeout(() => {
  //       this.addProductMessage = undefined
  //     }, 3000);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // getProducts() {
  //   try{
  //     this._product.productList().subscribe((result) => {
  //       if (result) {
  //         this.productList = result;
  //       }
  //     });
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // deleteProduct(_id: string) {
  //   try{
  //     this._product.deleteProduct(_id).subscribe((result) => {
  //       if (result) {
  //         this.addProductMessage = 'Product is deleted';
  //         this.getProducts();
  //       }
  //       setTimeout(() => {
  //         this.addProductMessage = undefined;
  //       }, 3000);
  //     });
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // // editProduct(data: any) {
  // //   if (this.productData) {
  // //     data._id = this.productData._id;
  // //   }
  // //   this._product.updateProduct(data).subscribe((result) => {
  // //     if (result) {
  // //       this.addProductMessage = 'Product has updated';
  // //     }
  // //   });
  // //   setTimeout(() => {
  // //     this.addProductMessage = undefined;
  // //   }, 3000);
  // //   console.warn(data);
  // // }
  // editProduct(){}
}





