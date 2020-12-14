import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'productsdetails/:id', component: ProductsdetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'suppliers', component: SuppliersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
