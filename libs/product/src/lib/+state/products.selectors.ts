import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  PRODUCTS_FEATURE_KEY,
  ProductsState,
  productsAdapter,
} from './products.reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY);

const { selectAll } = productsAdapter.getSelectors();

export const selectProductsLoaded = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loaded
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => selectAll(state)
);
