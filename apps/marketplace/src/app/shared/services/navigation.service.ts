import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutesEnum } from '../../app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToHomepage(): void {
    this.router.navigate([AppRoutesEnum.DASHBOARD]);
  }

  navigateToBasket(): void {
    this.router.navigate([AppRoutesEnum.BASKET]);
  }

  navigateToCheckout(): void {
    this.router.navigate([AppRoutesEnum.CHECKOUT]);
  }
}
