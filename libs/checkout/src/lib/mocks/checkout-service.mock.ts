import { CheckoutTransactionData } from '../domain/checkout.interface';
import { Observable, of } from 'rxjs';
import { TransactionState } from '../services/checkout.service';

export class CheckoutServiceStub {
  validateTransaction(_transactionData: CheckoutTransactionData): Observable<TransactionState> {
    return of({
      isValid: true,
    });
  }
}
