import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home',component:HomeComponent},
    {path: 'products', component: ProductsTableComponent}, 
    {path: 'product', component: ProductFormComponent},
    {path: 'product/:id', component: ProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
