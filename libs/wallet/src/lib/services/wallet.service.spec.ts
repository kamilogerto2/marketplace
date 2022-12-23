import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { readFirst } from '@nrwl/angular/testing';
import { WALLET_CONFIG_TOKEN } from './../wallet.module';
import { WalletService } from './wallet.service';

describe('WalletService', () => {
  let service: WalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: WALLET_CONFIG_TOKEN,
        useValue: '',
      }]
    });
    service = TestBed.inject(WalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the checkout with mocked data', async () => {
    const result = await readFirst(service.getWallet());

    expect(result.amount).toBe(4.45);
  });
});
