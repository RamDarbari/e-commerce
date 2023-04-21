import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/data';
import { AddproductsService } from '../services/addproduct.service';
@Component({
 selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
 export class CategoriesComponent {
  categoriesList: category[]= []
 ngOnInit(): void {
   this.getCategories();
 }
  constructor(private _product: AddproductsService, private _route: Router) {}

  getCategories() {
   try{
    this._product.categoriesList().subscribe(result=>{
      if(result){
          this.categoriesList = result;
          // console.log(result);
      }
    })
   }catch(error){
    console.log(error);
   }
  }
  
  onClickCategories(categoryId: string) {
    this._route.navigate(['/admin/subcategory'], { queryParams: { categoryId } });
  }
  
}
