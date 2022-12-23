import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'marketplace-items-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsGridComponent {}
