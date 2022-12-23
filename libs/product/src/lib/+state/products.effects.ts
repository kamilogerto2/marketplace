import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import * as ProductsActions from './products.actions';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);

  constructor(private productService: ProductService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      fetch({
        run: () => this.productService.getProducts().pipe(
          map((products) => ProductsActions.loadProductsSuccess({ products }))
        ),
        onError: (_action, error) => ProductsActions.loadProductsFailure({ error }),
      })
    )
  );
}
