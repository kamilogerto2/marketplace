import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import { BasketFacade } from './basket.facade';
import {
  BASKET_FEATURE_KEY,
  basketReducer,
} from './basket.reducer';
import { basketItem } from '../mocks/basket.mock';

describe('BasketFacade', () => {
  let facade: BasketFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BASKET_FEATURE_KEY, basketReducer),
        ],
        providers: [BasketFacade],
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

      facade = TestBed.inject(BasketFacade);
    });

    it('should add item to the basket', async () => {
      let list = await readFirst(facade.allBasket$);

      expect(list.length).toBe(0);

      facade.addProductToBasket(basketItem);

      list = await readFirst(facade.allBasket$);

      expect(list.length).toBe(1);
    });

    it('should remove item from the basket', async () => {
      facade.addProductToBasket(basketItem);

      let list = await readFirst(facade.allBasket$);

      expect(list.length).toBe(1);

      facade.removeProductFromBasket(2);

      list = await readFirst(facade.allBasket$);

      expect(list.length).toBe(0);
    });

    it('should clear the basket', async () => {
      facade.addProductToBasket(basketItem);

      let list = await readFirst(facade.allBasket$);

      expect(list.length).toBe(1);

      facade.clearBasket();

      list = await readFirst(facade.allBasket$);

      expect(list.length).toBe(0);
    });
  });
});
