import { Observable, of } from 'rxjs';

import { Product } from '../domain/product.interface';
import { products } from '../mocks/product.mock';

export class ProductServiceStub {
  getProducts(): Observable<Product[]> {
    return of(products);
  }
}
