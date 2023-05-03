import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddproductsService } from 'src/app/pages/services/addproduct.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  constructor(private _product: AddproductsService, private toastr: ToastrService){}

  @Input() products:{name:string, thumbnail: string, price: string, _id: string} = {name:'',thumbnail:'',price:'',_id:''};

  addToCart(itemId: string) {
    let quantity : number =  Number((<HTMLInputElement>document.getElementById(itemId)).value);
    try {
      let userInfo = localStorage.getItem("user")
      let { token } = JSON.parse(userInfo!)
      let data = { itemId: itemId, quantity: quantity }
      this._product.addToCart(data, token)
        .subscribe(() => {
          this.toastr.success('Product added succesfully');
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
