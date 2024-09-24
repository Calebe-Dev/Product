import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})

// 2 - Inplementa OnInit para inicializar o componente
export class ProductFormComponent implements OnInit{
  
  // 1 - Cria o objeto e injeta dependencia Router
  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private service: ProductService){ }
 

  // 3 - ngOnInit é chamado quando o componente é inicializado
  ngOnInit() {
    const id = Number(this.activeRouter.snapshot.paramMap)
    this.loadProduct(id);
  }

  loadProduct(id: number) {
    this.service.getProductsById(id).subscribe({
      next: data => alert(data.name)
    })
  };


}
