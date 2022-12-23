import { Action } from '@ngrx/store';

import * as WalletActions from './wallet.actions';
import {
  WalletState,
  initialWalletState,
  walletReducer,
} from './wallet.reducer';

describe('Wallet Reducer', () => {
  describe('valid Wallet actions', () => {
    it('initialWalletState should init wallet value', () => {
      const action = WalletActions.initWalletValue({ wallet: { amount: 5 } });

      const result: WalletState = walletReducer(initialWalletState, action);

      expect(result.wallet.amount).toBe(5);
    });

    it('deductMoney should deduct money from wallet', () => {
      const actionInit = WalletActions.initWalletValue({ wallet: { amount: 5 } });
      const actionDeduct = WalletActions.deductMoney({ amount: 2 });

      const resultInit: WalletState = walletReducer(initialWalletState, actionInit);
      const result: WalletState = walletReducer(resultInit, actionDeduct);

      expect(result.wallet.amount).toBe(3);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = walletReducer(initialWalletState, action);

      expect(result).toBe(initialWalletState);
    });
  });
});
