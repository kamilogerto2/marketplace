import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as BasketActions from './basket.actions';
import * as BasketSelectors from './basket.selectors';
import { BasketItem } from '../domain/basket-item.interface';

@Injectable()
export class BasketFacade {
  private readonly store = inject(Store);

  allBasket$ = this.store.pipe(select(BasketSelectors.selectAllBasket));
  productsAmount$ = this.store.pipe(select(BasketSelectors.selectBasketProductsAmount));
  productsTotalPrize$ = this.store.pipe(select(BasketSelectors.selectBasketTotalPrize));

  addProductToBasket(product: BasketItem) {
    this.store.dispatch(BasketActions.addProductToBasket({ product }));
  }

  removeProductFromBasket(id: number) {
    this.store.dispatch(BasketActions.removeProductFromBasket({ id }));
  }

  clearBasket() {
    this.store.dispatch(BasketActions.clearBasket());
  }
}
