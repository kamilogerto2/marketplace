import { Component } from '@angular/core';

import { WalletFacade } from '@marketplace/wallet';
import { ProductsFacade } from '@marketplace/product';

@Component({
  selector: 'marketplace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private walletFacade: WalletFacade, private productsFacade: ProductsFacade) {
    this.walletFacade.init();
    this.productsFacade.init();
  }
}
