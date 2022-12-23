import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as WalletActions from './wallet.actions';
import * as WalletSelectors from './wallet.selectors';

@Injectable()
export class WalletFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(WalletSelectors.selectWalletLoaded));
  wallet$ = this.store.pipe(select(WalletSelectors.selectWallet));

  init(): void {
    this.store.dispatch(WalletActions.initWallet());
  }

  deductMoney(amount: number): void {
    this.store.dispatch(WalletActions.deductMoney({ amount }));
  }
}
