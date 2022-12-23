import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as WalletActions from './wallet.actions';
import { WalletEffects } from './wallet.effects';
import { WalletServiceStub } from '../mocks/wallet-service.mock';
import { WalletService } from '../services/wallet.service';

describe('WalletEffects', () => {
  let actions: Observable<Action>;
  let effects: WalletEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        WalletEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        {
          provide: WalletService,
          useClass: WalletServiceStub,
        }
      ],
    });

    effects = TestBed.inject(WalletEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: WalletActions.initWallet() });

      const expected = hot('-a-|', {
        a: WalletActions.initWalletValue({ wallet: { amount: 4.45 } }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
