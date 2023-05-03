import { Component, Input, OnInit } from '@angular/core';
import { AddproductsService } from 'src/app/pages/services/addproduct.service';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  topSelling: any

  @Input() products:{image: string,} = {image:'',};

  constructor(private _product: AddproductsService){}

  ngOnInit(): void {
    this.topSellingProducts();
  }

  topSellingProducts(){
    try{
      this._product.topSellingProduct().subscribe((result) => {
        if (result) {
         this.topSelling = result
         console.log(result);
          }
          });
    }catch(error){
      console.log(error);
    }
  }
}
