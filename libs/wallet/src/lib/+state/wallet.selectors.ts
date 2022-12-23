import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  WALLET_FEATURE_KEY,
  WalletState,
} from './wallet.reducer';

export const selectWalletState =
  createFeatureSelector<WalletState>(WALLET_FEATURE_KEY);

export const selectWalletLoaded = createSelector(
  selectWalletState,
  (state: WalletState) => state.loaded
);

export const selectWalletError = createSelector(
  selectWalletState,
  (state: WalletState) => state.error
);

export const selectWallet = createSelector(
  selectWalletState,
  (state: WalletState) => state.wallet
);
