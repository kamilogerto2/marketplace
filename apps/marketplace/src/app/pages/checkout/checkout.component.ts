import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutFormComponent } from '@marketplace/checkout';
import { ButtonComponent, LabelComponent } from '@marketplace/design-system';

import { TransactionService } from '../../shared/services/transaction.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'marketplace-checkout',
  standalone: true,
  imports: [CommonModule, CheckoutFormComponent, LabelComponent, ButtonComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  isTransactionSucceeded = false;

  constructor(private transactionService: TransactionService, public navigationService: NavigationService) {}

  finalizeTransaction(): void {
    this.isTransactionSucceeded = true;
    this.transactionService.finalizeTransaction();
  }
}
