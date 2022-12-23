import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product, ProductsListComponent } from '@marketplace/product';

import { TransactionService } from '../../shared/services/transaction.service';

@Component({
  selector: 'marketplace-dashboard',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  constructor(private transactionService: TransactionService) {}

  addItemToCart(product: Product): void {
    this.transactionService.addItemToCart(product);
  }
}
