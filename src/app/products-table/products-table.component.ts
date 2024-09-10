import { Component } from '@angular/core';
import { Product } from '../product';
import { ConstructorProvider } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  products : Product[]= [];
  constructor(private service: ProductService){}

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
}
