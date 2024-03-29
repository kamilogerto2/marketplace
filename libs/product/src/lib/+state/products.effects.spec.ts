import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ProductsActions from './products.actions';
import { ProductsEffects } from './products.effects';
import { ProductService } from '../services/product.service';
import { ProductServiceStub } from '../mocks/product-service.mock';
import { products } from '../mocks/product.mock';

describe('ProductsEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        {
          provide: ProductService,
          useClass: ProductServiceStub,
        }
      ],
    });

    effects = TestBed.inject(ProductsEffects);
  });

  describe('init$', () => {
    it('should initialize products', () => {
      actions = hot('-a-|', { a: ProductsActions.initProducts() });

      const expected = hot('-a-|', {
        a: ProductsActions.loadProductsSuccess({ products: [ ...products ] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
