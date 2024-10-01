import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  url= 'http://localhost:3000/products';


        getProducts():Observable<Product[]>{
          return this.http.get<Product []>(this.url);
         // return this.http.get<Product[]> ('http://localhost:3000/products');
        }

        getProductsById(id:number):Observable<Product>{
          return this.http.get<Product> (`${this.url}/${id}`);
        //  return this.http.get<Product> ('http://localhost:3000/products/' + id);

        }
        
        update(product:Product): Observable <Product>{
          return this.http.put<Product>(`${this.url}/${product.id}`, product);
        //return this.http.put<Product>('http://localhost:3000/products/' + product.id, product);
        }

        delete(product:Product): Observable<void>
        {
          return this.http.delete<void>(`${this.url}/${product.id}`);
        // return this.http.delete<void>('http://localhost:3000/products/' + product.id);

        }

        save(product:Product): Observable <Product>{
          return this.http.post<Product>(this.url, product);
        //return this.http.post<Product>('http://localhost:3000/products/', product);
        }


}
