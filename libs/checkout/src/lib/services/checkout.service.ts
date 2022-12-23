import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CheckoutConfig, CheckoutTransactionData } from '../domain/checkout.interface';
import { CHECKOUT_CONFIG_TOKEN } from '../checkout.token';
import { HttpClient } from '@angular/common/http';

export interface TransactionState {
  isValid: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(@Inject(CHECKOUT_CONFIG_TOKEN) private config: CheckoutConfig, private http: HttpClient) {}

  validateTransaction(_transactionData: CheckoutTransactionData): Observable<TransactionState> {
    if (!this.config.apiUrl) {
      return of({
        isValid: true,
      })
    }

    return this.http.get<TransactionState>(this.config.apiUrl);
  }
}
