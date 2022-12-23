import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListComponent, ListItemComponent } from '@marketplace/design-system';

import { BasketFacade } from '../../+state/basket.facade';
import { BasketItem } from '../../domain/basket-item.interface';

@Component({
  selector: 'marketplace-basket-summary',
  standalone: true,
  imports: [CommonModule, ListItemComponent, ItemsListComponent],
  providers: [BasketFacade],
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketSummaryComponent {
  readonly basketItems$ = this.basketFacade.allBasket$;

  @Output() productRemoved: EventEmitter<number> = new EventEmitter();

  constructor(private basketFacade: BasketFacade) {}

  removeItem(id: number) {
    this.basketFacade.removeProductFromBasket(id);
    this.productRemoved.emit(id);
  }

  trackItem(_: number, item: BasketItem) {
    return item.id;
  }
}
