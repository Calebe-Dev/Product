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
        "category"  :"Eletronicos",
      },
      {
        "id"        :2, 
        "name"      :"Computador i5",
        "price"     :4000.00,
        "category"  :"Eletronicos",
      },
      {
        "id"        :1, 
        "name"      :"Computador i3",
        "price"     :1800.00,
        "category"  :"Eletronicos",
      },
      {
        "id"        :1, 
        "name"      :"Computador Xeon",
        "price"     :2000.00,
        "category"  :"Eletronicos",
      }
    ];
}
