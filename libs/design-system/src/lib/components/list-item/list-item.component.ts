import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MaterialModule } from '@marketplace/material';

import { LabelComponent } from '../label/label.component';
import { MoneyValueComponent } from '../money-value/money-value.component';

@Component({
  selector: 'marketplace-list-item',
  standalone: true,
  imports: [CommonModule, MaterialModule, LabelComponent, MoneyValueComponent, NgOptimizedImage],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() description = '';
  @Input() amount = 0;
  @Input() imagePath = '';
  @Output() itemRemoved: EventEmitter<void> = new EventEmitter();
}
