import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoriesComponent } from '../categories/categories.component';
import { SubcategoriesComponent } from '../subcategories/subcategories.component';
import { ProductsComponent } from '../products/products.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { NotFoundComponent } from 'src/app/authentications/not-found/not-found.component';
import { PurchaseHistoryComponent } from '../purchase-history/purchase-history.component';


const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    { path: 'category', component:  CategoriesComponent },
    {path: 'subcategory', component: SubcategoriesComponent},
    { path:'products', component: ProductsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'add-to-cart', component: AddToCartComponent },
    { path: 'purchase-hitory', component: PurchaseHistoryComponent},
    // { path: 'product-details', component: ProductDetailsComponent },
    {path: '', redirectTo: '/admin/home', pathMatch: 'full'},
    { path: 'home/product-details', redirectTo: '/admin/product-details', pathMatch: 'full' },
    { path: 'products', redirectTo: '/admin/home', pathMatch: 'full'},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
