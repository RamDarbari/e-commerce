import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddproductsService } from 'src/app/pages/services/addproduct.service';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.scss']
})
export class TopSellingComponent implements OnInit {

  @Input() topSelling:{name:string, image: string, price: string, _id: string} = {name:'',image:'',price:'',_id:''}


  constructor(private _product: AddproductsService, private _toastr: ToastrService){}
  
  ngOnInit(): void {
    
  }

  // scrollNext(): void {
  //   const container = document.querySelector('.card-slider');
  //   if (container) {
  //     container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
  //   }
  // }
  // scrollPrevious(): void {
  //   const container = document.querySelector('.card-slider');
  //   if (container) {
  //     container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
  //   }
  // }

  addToCart(itemId: string) {
    let quantity : number =  Number((<HTMLInputElement>document.getElementById(itemId)).value);
    try {
      let userInfo = localStorage.getItem("user")
      let { token } = JSON.parse(userInfo!)
      let data = { itemId: itemId, quantity: quantity }
      this._product.addToCart(data, token)
        .subscribe(() => {
          this._toastr.success('Product added succesfully')
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
