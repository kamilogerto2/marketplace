import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'marketplace-money-value',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './money-value.component.html',
  styleUrls: ['./money-value.component.scss'],
})
export class MoneyValueComponent {
  @Input() amount = 0;
}
