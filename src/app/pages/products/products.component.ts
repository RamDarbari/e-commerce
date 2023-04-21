import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/data';
import { AddproductsService } from '../services/addproduct.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: product[] = [];
  subCategoryId: any | any
  categoryId: any | null



  ngOnInit(): void {
    this.subCategoryId = this.route.snapshot.queryParams['subCategoryId'];
    this.getProduct(this.categoryId,this.subCategoryId);
  }
  constructor(private _route: Router, private route: ActivatedRoute, private _product: AddproductsService, private toastr: ToastrService) { }


  getProduct(subCategoryId: any,categoryId: any ){
    try{
     this._product.getProduct(categoryId!,subCategoryId!).subscribe(result=>{
      this.productList = result
     })
    }catch(error){
      console.log(error)
    }
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
