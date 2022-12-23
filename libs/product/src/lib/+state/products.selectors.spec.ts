import {
  productsAdapter,
  ProductsPartialState,
  initialProductsState,
} from './products.reducer';
import * as ProductsSelectors from './products.selectors';
import { products } from '../mocks/product.mock';

describe('Products Selectors', () => {
  let state: ProductsPartialState;

  beforeEach(() => {
    state = {
      products: productsAdapter.setAll(
        [
          ...products
        ],
        {
          ...initialProductsState,
          loaded: true,
        }
      ),
    };
  });

  describe('Products Selectors', () => {
    it('selectAllProducts() should return the list of Products', () => {
      const results = ProductsSelectors.selectAllProducts(state);

      expect(results.length).toBe(15);
    });

    it('selectProductsLoaded() should return the current "loaded" status', () => {
      const result = ProductsSelectors.selectProductsLoaded(state);

      expect(result).toBe(true);
    });
  });
});
