import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@marketplace/material';

import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'marketplace-icon-action-box',
  standalone: true,
  imports: [CommonModule, MaterialModule, LabelComponent],
  templateUrl: './icon-action-box.component.html',
  styleUrls: ['./icon-action-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconActionBoxComponent {
  @Input() actionIcon = '';
  @Input() actionText: string = '';
}
