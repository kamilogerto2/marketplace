import {
  basketAdapter,
  BasketPartialState,
  initialBasketState,
} from './basket.reducer';
import * as BasketSelectors from './basket.selectors';
import { basketItem } from '../mocks/basket.mock';

describe('Basket Selectors', () => {
  let state: BasketPartialState;

  beforeEach(() => {
    state = {
      basket: basketAdapter.setAll(
        [
          basketItem
        ],
        {
          ...initialBasketState,
        }
      ),
    };
  });

  describe('Basket Selectors', () => {
    it('selectAllBasket() should return the list of Basket', () => {
      const results = BasketSelectors.selectAllBasket(state);

      expect(results.length).toBe(1);
      expect(results[0].id).toBe(basketItem.id);
    });

    it('selectBasketProductsAmount() should return basket items count', () => {
      const result = BasketSelectors.selectBasketProductsAmount(state);

      expect(result).toBe(1);
    });

    it('selectBasketProductsAmount() should return basket items count', () => {
      const result = BasketSelectors.selectBasketTotalPrize(state);

      expect(result).toBe(basketItem.prize);
    });
  });
});
