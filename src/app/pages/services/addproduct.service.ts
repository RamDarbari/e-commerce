import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartItemList, category, product, product1, topDeal } from 'src/app/data';
// import axios from 'axios';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddproductsService {
  categoryId: any | null
  subCategoryId: any | null;
  product : any | null
  cartList: any | null
  topDeal: any | null

  api: any | null

  constructor(private _http: HttpClient) {
    let api = "http://10.8.10.59:4000"
  }


  productList() {
    return this._http.get<product[]>('http://10.8.10.95:8001/fetchAllProducts');
  };
  categoriesList() {
    return this._http.get<any>('http://10.8.10.95:4000/items/filter/')
  };
  getSubCategories(id: string) {
    this.categoryId = id
    localStorage.setItem('categoryId', id)
    return this._http.get<product1[]>(`http://10.8.10.95:4000/items/filter/?categoryId=${id}`)

  };
  getProduct(subCategoryId: string, id: string) {
    this.categoryId = localStorage.getItem('categoryId')
    return this._http.get<product[]>(`http://10.8.10.95:4000/items/filter/?categoryId=${this.categoryId}&subCategoryId=${subCategoryId}`)
  }
  addToCart( data: Object , token:any ) {
    return this._http.post('http://10.8.10.95:4000/addToCart', data, { headers: {"Authorization" : `Bearer ${ token }`}})
  }
  getCart(token: any): Observable<cartItemList> {
    return this._http.get<cartItemList>('http://10.8.10.95:4000/getCartItems', { headers: {"Authorization" : `Bearer ${token}`}});
  }
  deleteCartItems(token: any, itemId: string){
    return this._http.delete(`http://10.8.10.95:4000/deleteCartItem/?itemId=${itemId}`,  { headers: {"Authorization" : `Bearer ${token}`}})
  }
  // logout(token: any){
  //   return this._http.post('http://10.8.10.95:4000/users/logout', { headers: {"Authorization" : `Bearer ${token}`}})
  // }
  checkOut(token: any): Observable<any>{
    return this._http.get('http://10.8.10.95:4000/cart/checkout', { headers: {"Authorization" : `Bearer ${token}`}})
  }
  purchaseHistory(token: any): Observable<any>{
    return this._http.get('http://10.8.10.95:4000/purchasedHistory', { headers: {"Authorization" : `Bearer ${token}`}})
  }
  topSellingProduct(){
    return this._http.get<topDeal[]>('http://10.8.10.95:4000/items/topSellings')
    
  }
  fetchOneItem(id: string){
    return this._http.get<any>(`http://10.8.10.95:4000/item/?_id=${id}`)
  }
}
