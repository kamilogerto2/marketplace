import { Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import {
  ProductsState,
  initialProductsState,
  productsReducer,
} from './products.reducer';
import { products } from '../mocks/product.mock';

describe('Products Reducer', () => {
  describe('valid Products actions', () => {
    it('loadProductsSuccess should return the list of known Products', () => {
      const productsToAdd = [ ...products ];
      const action = ProductsActions.loadProductsSuccess({ products: productsToAdd });

      const result: ProductsState = productsReducer(
        initialProductsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(15);
    });
  });

  it('bookProduct should book the product', () => {
    const productsToAdd = [ ...products ];
    const actionAdd = ProductsActions.loadProductsSuccess({ products: productsToAdd });
    const actionBook = ProductsActions.bookProduct({ id: 1 });

    const resultAdd: ProductsState = productsReducer(initialProductsState, actionAdd);
    const result: ProductsState = productsReducer(resultAdd, actionBook);

    expect(result.entities[1]?.disabled).toBe(true);
  });

  it('removeProducts should remove the products', () => {
    const productsToAdd = [ ...products ];
    const actionAdd = ProductsActions.loadProductsSuccess({ products: productsToAdd });
    const actionBook = ProductsActions.removeProducts({ ids: [1, 2, 3] });

    const resultAdd: ProductsState = productsReducer(initialProductsState, actionAdd);
    const result: ProductsState = productsReducer(resultAdd, actionBook);

    expect(result.ids.length).toBe(12);
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = productsReducer(initialProductsState, action);

      expect(result).toBe(initialProductsState);
    });
  });
});
