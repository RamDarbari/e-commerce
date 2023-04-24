import { Component, OnInit } from '@angular/core';
import { AddproductsService } from '../services/addproduct.service';
import { product } from 'src/app/data';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit{
  history: any
  purchasedItems: any
 constructor(private _product: AddproductsService) {}

  ngOnInit(): void {
  this.history = this.purchaseHistory();
  }

 purchaseHistory(){
    try{
      let userInfo = localStorage.getItem("user");
      let { token } = JSON.parse(userInfo!)
          this._product.purchaseHistory(token).subscribe(result=>{
              this.history = result;
            console.log(this.history,'bnujgduyfgd');
          })
    }catch(error){
      console.log(error);
    }
 }
}
