import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product, ProductConfig } from '../domain/product.interface';
import { PRODUCT_CONFIG_TOKEN } from '../products.module';
import { products } from '../mocks/product.mock';

@Injectable({
  providedIn: 'any'
})
export class ProductService {
  constructor(@Inject(PRODUCT_CONFIG_TOKEN) private config: ProductConfig, private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if(!this.config.apiUrl) {
      return of(products);
    }

    return this.http.get<Product[]>(this.config.apiUrl);
  }
}
