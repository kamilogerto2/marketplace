import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  BASKET_FEATURE_KEY,
  basketAdapter,
} from './basket.reducer';
import { EntityState } from '@ngrx/entity';
import { BasketItem } from '../domain/basket-item.interface';

export const selectBasketState =
  createFeatureSelector<EntityState<BasketItem>>(BASKET_FEATURE_KEY);

const { selectAll } = basketAdapter.getSelectors();

export const selectAllBasket = createSelector(
  selectBasketState,
  (state: EntityState<BasketItem>) => selectAll(state)
);

export const selectBasketProductsAmount = createSelector(
  selectAllBasket,
  (basket) => basket.length
);

export const selectBasketTotalPrize = createSelector(
  selectAllBasket,
  (basket) => basket.reduce((totalAmount, currentItem) => totalAmount += currentItem.prize, 0)
);
