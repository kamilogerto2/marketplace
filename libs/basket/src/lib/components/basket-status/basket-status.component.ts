import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconActionBoxComponent } from '@marketplace/design-system';

import { BasketFacade } from '../../+state/basket.facade';

@Component({
  selector: 'marketplace-basket-status',
  standalone: true,
  imports: [CommonModule, IconActionBoxComponent],
  templateUrl: './basket-status.component.html',
  styleUrls: ['./basket-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketStatusComponent {
  basketCount$ = this.basketFacade.productsAmount$;

  constructor(private basketFacade: BasketFacade) {}
}
