import { TestBed } from '@angular/core/testing';

import { CheckoutService } from './checkout.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CHECKOUT_CONFIG_TOKEN } from './../checkout.token';
import { transactionData } from '../mocks/transaction.mock';
import { readFirst } from '@nrwl/angular/testing';

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: CHECKOUT_CONFIG_TOKEN,
        useValue: '',
      }]
    });
    service = TestBed.inject(CheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the checkout with mocked data', async () => {
    const result = await readFirst(service.validateTransaction(transactionData));

    expect(result.isValid).toBeTruthy();
  });
});
