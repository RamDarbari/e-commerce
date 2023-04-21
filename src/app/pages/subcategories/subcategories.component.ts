import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product1, product, } from 'src/app/data';
import { AddproductsService } from '../services/addproduct.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent  {
  product: product1[] = [];
  categoryId: any | null;
  subCategoryId: any | null;

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.queryParams['categoryId'];
    this.getSubcategories(this.categoryId);
  }

  constructor(private _route: Router, private _product: AddproductsService, private route: ActivatedRoute) { }



  getSubcategories(subCategoryId: string | null) {
    try {
      this._product.getSubCategories(subCategoryId!).subscribe(result => {
        this.product = result;
        // console.log(this.product);
      });
    } catch (error) {
      console.error(error);
    }
  }

  onClickProducts(subCategoryId: string) {
    // console.log(subCategoryId);
    //  console.log(this.getSubcategories(this.categoryId));
    this.subCategoryId = subCategoryId;
    this._route.navigate(['/admin/products'], { queryParams: { subCategoryId } });
  }

}
