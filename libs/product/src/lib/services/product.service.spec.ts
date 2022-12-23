import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { readFirst } from '@nrwl/angular/testing';
import { PRODUCT_CONFIG_TOKEN } from './../products.module';
import { products } from '../mocks/product.mock';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: PRODUCT_CONFIG_TOKEN,
        useValue: '',
      }]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the checkout with mocked data', async () => {
    const result = await readFirst(service.getProducts());

    expect(result).toBe(products);
  });
});
