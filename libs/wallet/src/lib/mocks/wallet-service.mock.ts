import { Observable, of } from 'rxjs';

import { Wallet } from '../domain/wallet.interface';
import { walletMock } from '../mocks/wallet.mock';

export class WalletServiceStub {
  getWallet(): Observable<Wallet> {
    return of(walletMock)
  }
}
