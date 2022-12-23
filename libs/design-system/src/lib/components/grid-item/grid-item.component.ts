import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MaterialModule } from '@marketplace/material';

import { LabelComponent } from '../label/label.component';
import { MoneyValueComponent } from '../money-value/money-value.component';

@Component({
  selector: 'marketplace-grid-item',
  standalone: true,
  imports: [CommonModule, MaterialModule, LabelComponent, MoneyValueComponent, NgOptimizedImage],
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent {
  @Input() description = '';
  @Input() amount = 0;
  @Input() disabled = false;
  @Input() imagePath = '';
}
