import { createAction, props } from '@ngrx/store';

import { Wallet } from '../domain/wallet.interface';

export const initWallet = createAction('[Wallet Page] Init');
export const initWalletValue = createAction('[Wallet Page] Init Wallet Value', props<{ wallet: Wallet }>());
export const deductMoney = createAction('[Wallet Page] Deduct Money', props<{ amount: number }>());
export const loadWalletFailure = createAction(
  '[Wallet/API] Load Wallet Failure',
  props<{ error: any }>()
);
