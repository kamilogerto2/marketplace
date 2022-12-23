import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsGridComponent, GridItemComponent } from '@marketplace/design-system';

import { ProductsFacade } from '../../+state/products.facade';
import { Product } from '../../domain/product.interface';

@Component({
  selector: 'marketplace-products-list',
  standalone: true,
  imports: [CommonModule, ItemsGridComponent, GridItemComponent],
  providers: [ProductsFacade],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  readonly products$ = this.productsFacade.allProducts$;

  @Output() itemSelected: EventEmitter<Product> = new EventEmitter();

  constructor(private productsFacade: ProductsFacade) {}

  selectItem(product: Product): void {
    this.itemSelected.emit(product);
    this.productsFacade.bookProduct(product.id)
  }

  trackProduct(_: number, product: Product) {
    return product.id;
  }
}
