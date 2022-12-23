import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as BasketActions from './basket.actions';
import { BasketItem } from '../domain/basket-item.interface';

export const BASKET_FEATURE_KEY = 'basket';

export interface BasketPartialState {
  readonly [BASKET_FEATURE_KEY]: EntityState<BasketItem>;
}

export const basketAdapter: EntityAdapter<BasketItem> =
  createEntityAdapter<BasketItem>();

export const initialBasketState: EntityState<BasketItem> = basketAdapter.getInitialState();

const reducer = createReducer(
  initialBasketState,
  on(BasketActions.clearBasket, (state) =>
    basketAdapter.removeAll({ ...state, loaded: true })
  ),
  on(BasketActions.addProductToBasket, (state, { product }) =>
    basketAdapter.addOne(product, { ...state })
  ),
  on(BasketActions.removeProductFromBasket, (state, { id }) =>
    basketAdapter.removeOne(id, { ...state })
  ),
);

export function basketReducer(state: EntityState<BasketItem> | undefined, action: Action) {
  return reducer(state, action);
}
