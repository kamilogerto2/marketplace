import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from '@marketplace/design-system';
import { WalletStatusComponent } from '@marketplace/wallet';
import { BasketStatusComponent } from '@marketplace/basket';

import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'marketplace-header',
  standalone: true,
  imports: [CommonModule, TitleComponent, WalletStatusComponent, BasketStatusComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(public navigationService: NavigationService) {}
}
