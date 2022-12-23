import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const enum AppRoutesEnum {
  DASHBOARD = '',
  BASKET = 'basket',
  CHECKOUT = 'checkout',
}

export const ROUTES: Route[] = [
  { path: AppRoutesEnum.DASHBOARD, loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent) },
  { path: AppRoutesEnum.BASKET, loadComponent: () => import('./pages/basket/basket.component').then(mod => mod.BasketComponent) },
  { path: AppRoutesEnum.CHECKOUT, loadComponent: () => import('./pages/checkout/checkout.component').then(mod => mod.CheckoutComponent) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
