import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import * as WalletActions from './wallet.actions';
import { WalletService } from '../services/wallet.service';

@Injectable()
export class WalletEffects {
  private actions$ = inject(Actions);

  constructor(private walletService: WalletService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WalletActions.initWallet),
      fetch({
        run: () => this.walletService.getWallet().pipe(
          map((wallet) => WalletActions.initWalletValue({ wallet }))
        ),
        onError: (action, error) => WalletActions.loadWalletFailure({ error }),
      })
    )
  );
}
