import { createReducer, on, Action } from '@ngrx/store';

import * as WalletActions from './wallet.actions';
import { Wallet } from '../domain/wallet.interface';

export const WALLET_FEATURE_KEY = 'wallet';

export interface WalletState {
  loaded: boolean;
  error?: string | null;
  wallet: Wallet;
}

export interface WalletPartialState {
  readonly [WALLET_FEATURE_KEY]: WalletState;
}

export const initialWalletState: WalletState = {
  loaded: false,
  error: null,
  wallet: {
    amount: 0,
  },
};

const reducer = createReducer(
  initialWalletState,
  on(WalletActions.initWallet, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WalletActions.initWalletValue, (state, { wallet }) =>
    ({ ...state, wallet: { ...wallet }, loaded: true }),
  ),
  on(WalletActions.deductMoney, (state, { amount }) =>
    ({ ...state, wallet: { ...state.wallet, amount: state.wallet.amount - amount } }),
  ),
  on(WalletActions.loadWalletFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function walletReducer(state: WalletState | undefined, action: Action) {
  return reducer(state, action);
}
