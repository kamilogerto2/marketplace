import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketSummaryComponent } from '@marketplace/basket';
import { ButtonComponent, LabelComponent } from '@marketplace/design-system';
import { MaterialModule } from '@marketplace/material';

import { NavigationService } from '../../shared/services/navigation.service';
import { TransactionService } from '../../shared/services/transaction.service';

@Component({
  selector: 'marketplace-basket',
  standalone: true,
  imports: [CommonModule, BasketSummaryComponent, ButtonComponent, LabelComponent, MaterialModule],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent {
  readonly basketItemsCount$ = this.transactionService.basketItemsCount$;
  readonly basketTotalPrize$ = this.transactionService.basketTotalPrize$;
  readonly isEnoughMoney$ = this.transactionService.isEnoughMoney$;

  constructor(
    private transactionService:TransactionService,
    public navigationService: NavigationService,
  ) {}

  unbookProduct(productId: number): void {
    this.transactionService.unbookProduct(productId)
  }
}
