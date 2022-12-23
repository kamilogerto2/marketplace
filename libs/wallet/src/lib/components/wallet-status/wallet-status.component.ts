import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconActionBoxComponent } from '@marketplace/design-system';

import { WalletFacade } from '../../+state/wallet.facade';

@Component({
  selector: 'marketplace-wallet-status',
  standalone: true,
  imports: [CommonModule, IconActionBoxComponent],
  providers: [WalletFacade],
  templateUrl: './wallet-status.component.html',
  styleUrls: ['./wallet-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletStatusComponent {
  wallet$ = this.walletFacade.wallet$;

  constructor(private walletFacade: WalletFacade) {}
}
