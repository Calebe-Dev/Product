import { Component } from '@angular/core';
import { Product } from '../product';
import { ConstructorProvider } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  products : Product[]= [];
  constructor(private router: Router,
              private service: ProductService){}

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts(){
    this.service.getProducts().subscribe( {
      next : data => this.products = data
      }
    )
  }

  delete(product: Product){
    this.service.delete(product).subscribe({
      next: () => this.loadProducts()
    })
  }

  create(){
    this.router.navigate(['product'])
  }

}
