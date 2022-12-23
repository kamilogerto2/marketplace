import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WalletFacade } from '@marketplace/wallet';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductsFacade } from '@marketplace/product';
import { HeaderComponent } from './layout/header/header.component';
import { BasketFacade } from '@marketplace/basket';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterTestingModule],
      declarations: [AppComponent],
      providers: [BasketFacade, WalletFacade, ProductsFacade, provideMockStore()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
