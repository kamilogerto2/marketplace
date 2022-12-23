import { Injectable } from '@angular/core';
import { map, take, withLatestFrom } from 'rxjs';

import { BasketFacade } from '@marketplace/basket';
import { Product, ProductsFacade } from '@marketplace/product';
import { WalletFacade } from '@marketplace/wallet';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  basketItemsCount$ = this.basketFacade.productsAmount$;
  basketTotalPrize$ = this.basketFacade.productsTotalPrize$;
  isEnoughMoney$ = this.basketTotalPrize$.pipe(
    withLatestFrom(this.walletFacade.wallet$),
    map(([totalPrice, wallet]) => (wallet?.amount || 0) >= totalPrice)
  )

  constructor(
    private basketFacade: BasketFacade,
    private productsFacade: ProductsFacade,
    private walletFacade: WalletFacade,
  ) {}

  unbookProduct(productId: number): void {
    this.productsFacade.unbookProduct(productId);
  }

  finalizeTransaction(): void {
    this.basketFacade.allBasket$.pipe(
      withLatestFrom(this.basketFacade.productsTotalPrize$),
      take(1)
    ).subscribe(([basketItems, totalPrice]) => {
      const productsIds = basketItems.map((item) => item.id);

      this.productsFacade.removeProducts(productsIds);
      this.walletFacade.deductMoney(totalPrice);
      this.basketFacade.clearBasket();
    })
  }

  addItemToCart(product: Product) {
    this.basketFacade.addProductToBasket(product);
  }
}
