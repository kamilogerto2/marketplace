import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromProducts from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';
import { ProductsFacade } from './+state/products.facade';
import { ProductConfig } from './domain/product.interface';

export const PRODUCT_CONFIG_TOKEN = new InjectionToken<ProductConfig>('product.config');

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.productsReducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsFacade],
})
export class ProductsModule {
  static forRoot(config: ProductConfig): ModuleWithProviders<ProductsModule> {
    return {
      ngModule: ProductsModule,
      providers: [
        {
          provide: PRODUCT_CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
