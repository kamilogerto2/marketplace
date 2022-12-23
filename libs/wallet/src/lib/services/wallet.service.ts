import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Wallet, WalletConfig } from '../domain/wallet.interface';
import { WALLET_CONFIG_TOKEN } from '../wallet.module';
import { HttpClient } from '@angular/common/http';
import { walletMock } from '../mocks/wallet.mock';

@Injectable({
  providedIn: 'any'
})
export class WalletService {
  constructor(@Inject(WALLET_CONFIG_TOKEN) private config: WalletConfig, private http: HttpClient) {}

  getWallet(): Observable<Wallet> {
    if(!this.config.apiUrl) {
      return of(walletMock);
    }

    return this.http.get<Wallet>(this.config.apiUrl);
  }
}
