import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import { Product } from '../domain/product.interface';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<Product> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    loaded: false,
  });

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.initProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    productsAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(ProductsActions.removeProducts, (state, { ids }) =>
    productsAdapter.removeMany(ids, { ...state })
  ),
  on(ProductsActions.bookProduct, (state, { id }) =>
    productsAdapter.updateOne({ id, changes: { disabled: true} }, { ...state })
  ),
  on(ProductsActions.unbookProduct, (state, { id }) =>
    productsAdapter.updateOne({ id, changes: { disabled: false} }, { ...state })
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
