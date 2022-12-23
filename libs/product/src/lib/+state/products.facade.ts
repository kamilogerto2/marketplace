import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import * as ProductsSelectors from './products.selectors';

@Injectable()
export class ProductsFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(ProductsSelectors.selectProductsLoaded));
  allProducts$ = this.store.pipe(select(ProductsSelectors.selectAllProducts));

  init() {
    this.store.dispatch(ProductsActions.initProducts());
  }

  bookProduct(id: number) {
    this.store.dispatch(ProductsActions.bookProduct({ id }));
  }

  unbookProduct(id: number) {
    this.store.dispatch(ProductsActions.unbookProduct({ id }));
  }

  removeProducts(ids: number[]) {
    this.store.dispatch(ProductsActions.removeProducts({ ids }));
  }
}
