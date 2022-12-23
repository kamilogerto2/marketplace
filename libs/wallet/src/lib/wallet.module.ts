import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromWallet from './+state/wallet.reducer';
import { WalletEffects } from './+state/wallet.effects';
import { WalletFacade } from './+state/wallet.facade';
import { WalletConfig } from './domain/wallet.interface';

export const WALLET_CONFIG_TOKEN = new InjectionToken<WalletConfig>('wallet.config');

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromWallet.WALLET_FEATURE_KEY,
      fromWallet.walletReducer
    ),
    EffectsModule.forFeature([WalletEffects]),
  ],
  providers: [WalletFacade],
})
export class WalletModule {
  static forRoot(config: WalletConfig): ModuleWithProviders<WalletModule> {
    return {
      ngModule: WalletModule,
      providers: [
        {
          provide: WALLET_CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
