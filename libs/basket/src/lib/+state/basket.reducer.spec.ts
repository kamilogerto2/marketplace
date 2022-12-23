import { Action } from '@ngrx/store';

import * as BasketActions from './basket.actions';
import {
  initialBasketState,
  basketReducer,
} from './basket.reducer';
import { EntityState } from '@ngrx/entity';
import { BasketItem } from '../domain/basket-item.interface';
import { basketItem } from '../mocks/basket.mock';

describe('Basket Reducer', () => {
  describe('valid Basket actions', () => {
    it('addProductToBasket should return the list Basket with added item', () => {
      const action = BasketActions.addProductToBasket({ product: basketItem });

      const result: EntityState<BasketItem> = basketReducer(initialBasketState, action);

      expect(result.ids.length).toBe(1);
    });

    it('addProductToBasket should return the list Basket with added item', () => {
      const actionAdd = BasketActions.addProductToBasket({ product: basketItem });
      const actionRemove = BasketActions.removeProductFromBasket({ id: basketItem.id });

      const result: EntityState<BasketItem> = basketReducer(initialBasketState, actionAdd);
      const finalResult: EntityState<BasketItem> = basketReducer(result, actionRemove);

      expect(finalResult.ids.length).toBe(0);
    });

    it('clearBasket should return the list Basket with added item', () => {
      const actionAdd = BasketActions.addProductToBasket({ product: basketItem });
      const actionClean = BasketActions.clearBasket();

      const result: EntityState<BasketItem> = basketReducer(initialBasketState, actionAdd);
      const finalResult: EntityState<BasketItem> = basketReducer(result, actionClean);

      expect(finalResult.ids.length).toBe(0);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = basketReducer(initialBasketState, action);

      expect(result).toBe(initialBasketState);
    });
  });
});
