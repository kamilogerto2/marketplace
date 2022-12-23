import { createAction, props } from '@ngrx/store';

import { BasketItem } from '../domain/basket-item.interface';

export const addProductToBasket = createAction(
  '[Basket] Add Product To Basket',
  props<{ product: BasketItem }>()
);

export const removeProductFromBasket = createAction(
  '[Basket] Remove Product From Basket',
  props<{ id: number }>()
);

export const clearBasket = createAction(
  '[Basket] Clear Basket',
);
