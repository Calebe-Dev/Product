import { Component } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    products : product[] = [
      {
        "id"        :1,
        "name"      :"Computador i7",
        "price"     :6000.00,
        "category"  :"Eletronicos"
      }
    ];
}
