import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import { WalletEffects } from './wallet.effects';
import { WalletFacade } from './wallet.facade';
import {
  WALLET_FEATURE_KEY,
  walletReducer,
} from './wallet.reducer';
import { WalletService } from '../services/wallet.service';
import { WalletServiceStub } from '../mocks/wallet-service.mock';

describe('WalletFacade', () => {
  let facade: WalletFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(WALLET_FEATURE_KEY, walletReducer),
          EffectsModule.forFeature([WalletEffects]),
        ],
        providers: [
          WalletFacade,
          {
            provide: WalletService,
            useClass: WalletServiceStub,
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

      facade = TestBed.inject(WalletFacade);
    });

    it('init() should init wallet with loaded == true', async () => {
      let wallet = await readFirst(facade.wallet$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(wallet.amount).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      wallet = await readFirst(facade.wallet$);
      isLoaded = await readFirst(facade.loaded$);

      expect(wallet.amount).toBe(4.45);
      expect(isLoaded).toBe(true);
    });

    it('init() deduct money from wallet', async () => {
      facade.init();
      let wallet = await readFirst(facade.wallet$);

      expect(wallet.amount).toBe(4.45);

      facade.deductMoney(2);
      wallet = await readFirst(facade.wallet$);

      expect(wallet.amount).toBe(2.45);
    });
  });
});
