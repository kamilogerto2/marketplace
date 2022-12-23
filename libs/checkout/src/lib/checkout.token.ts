import { InjectionToken } from '@angular/core';
import { CheckoutConfig } from './domain/checkout.interface';

export const CHECKOUT_CONFIG_TOKEN = new InjectionToken<CheckoutConfig>('checkout.config');
