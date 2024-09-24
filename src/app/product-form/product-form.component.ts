import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})

export class ProductFormComponent implements OnInit{
  
  formGrupProduct: FormGroup;


  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private service: ProductService,
              private formBuilder: FormBuilder 
            )
            { this.formGrupProduct = formBuilder.group({
              id:[''],
              name:[''],
              price:[''],
              category:['']
            })
          }
 

  ngOnInit() {
    const id = Number(this.activeRouter.snapshot.paramMap.get("id"))
    this.loadProduct(id);
  }

  loadProduct(id: number) {
    this.service.getProductsById(id).subscribe({
      next: data => this.formGrupProduct.setValue(data)
    })
  };

  update(){
    this.service.update(this.formGrupProduct.value).subscribe({
      next: () => this.router.navigate(['products'])
    })
  }

}
