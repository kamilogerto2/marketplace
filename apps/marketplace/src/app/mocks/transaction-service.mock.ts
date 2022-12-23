import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Product } from '@marketplace/product';

@Injectable({
  providedIn: 'root',
})
export class TransactionServiceStub {
  basketItemsCount$ = of(2);
  basketTotalPrize$ = of(3);
  isEnoughMoney$ = of(true);

  unbookProduct(_productId: number): void {
    return;
  }

  finalizeTransaction(): void {
    return;
  }

  addItemToCart(_product: Product) {
    return;
  }
}
