import {
  WalletPartialState,
} from './wallet.reducer';
import * as WalletSelectors from './wallet.selectors';

describe('Wallet Selectors', () => {
  let state: WalletPartialState;

  beforeEach(() => {
    state = {
      wallet: {
        wallet: {
          amount: 5
        },
        loaded: true,
      },
    };
  });

  describe('Wallet Selectors', () => {
    it('selectAllWallet() should return the list of Wallet', () => {
      const result = WalletSelectors.selectWallet(state);

      expect(result.amount).toBe(5);
    });
  });
});
