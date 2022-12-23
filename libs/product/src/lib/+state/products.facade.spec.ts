import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import { ProductsEffects } from './products.effects';
import { ProductsFacade } from './products.facade';
import {
  PRODUCTS_FEATURE_KEY,
  ProductsState,
  productsReducer,
} from './products.reducer';
import { ProductService } from '../services/product.service';
import { ProductServiceStub } from '../mocks/product-service.mock';

interface TestSchema {
  products: ProductsState;
}

describe('ProductsFacade', () => {
  let facade: ProductsFacade;
  let store: Store<TestSchema>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PRODUCTS_FEATURE_KEY, productsReducer),
          EffectsModule.forFeature([ProductsEffects]),
        ],
        providers: [
          ProductsFacade,
          {
            provide: ProductService,
            useClass: ProductServiceStub,
          }
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ProductsFacade);
    });

    it('loadAll() should return list of products with loaded == true', async () => {
      let list = await readFirst(facade.allProducts$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allProducts$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(15);
      expect(isLoaded).toBe(true);
    });

    it('should book product', async () => {
      facade.init();
      let list = await readFirst(facade.allProducts$);

      expect(list[0].disabled).toBeFalsy();

      facade.bookProduct(1);
      list = await readFirst(facade.allProducts$);

      expect(list[0].disabled).toBe(true);
    });

    it('should unbook product', async () => {
      facade.init();
      facade.bookProduct(1);

      let list = await readFirst(facade.allProducts$);

      expect(list[0].disabled).toBe(true);

      facade.unbookProduct(1);
      list = await readFirst(facade.allProducts$);

      expect(list[0].disabled).toBe(false);
    });

    it('should remove 3 products', async () => {
      facade.init();
      let list = await readFirst(facade.allProducts$);

      expect(list.length).toBe(15);

      facade.removeProducts([1, 2, 3]);

      list = await readFirst(facade.allProducts$);

      expect(list.length).toBe(12);
    });
  });
});
