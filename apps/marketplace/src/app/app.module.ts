import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WalletModule } from '@marketplace/wallet';
import { BasketStoreModule } from '@marketplace/basket';
import { ProductsModule } from '@marketplace/product';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environments';
import { CHECKOUT_CONFIG_TOKEN } from '@marketplace/checkout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    HeaderComponent,
    WalletModule.forRoot(environment.wallet),
    BasketStoreModule,
    ProductsModule.forRoot(environment.products),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [{
    provide: CHECKOUT_CONFIG_TOKEN,
    useValue: environment.checkout,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
