import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as fromBasket from './basket.reducer';
import { BasketFacade } from './basket.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromBasket.BASKET_FEATURE_KEY,
      fromBasket.basketReducer
    ),
  ],
  providers: [BasketFacade],
})
export class BasketStoreModule {}
