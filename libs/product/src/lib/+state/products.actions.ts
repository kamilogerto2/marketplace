import { createAction, props } from '@ngrx/store';

import { Product } from '../domain/product.interface';

export const initProducts = createAction('[Products Page] Init');

export const loadProductsSuccess = createAction(
  '[Products/API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products/API] Load Products Failure',
  props<{ error: any }>()
);

export const bookProduct = createAction(
  '[Products] Book product',
  props<{ id: number }>()
);

export const unbookProduct = createAction(
  '[Products] Unbook product',
  props<{ id: number }>()
);

export const removeProducts = createAction(
  '[Products] Remove product',
  props<{ ids: number[] }>()
);
