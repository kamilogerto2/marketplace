import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TransactionService } from '../../shared/services/transaction.service';
import { TransactionServiceStub } from '../../mocks/transaction-service.mock';
import { CheckoutService } from '../../../../../../libs/checkout/src/lib/services/checkout.service';
import { CheckoutServiceStub } from '../../../../../../libs/checkout/src/lib/mocks/checkout-service.mock';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CheckoutComponent, NoopAnimationsModule ],
      providers: [
        {
          provide: TransactionService,
          useClass: TransactionServiceStub,
        },
        provideMockStore(),
        {
          provide: CheckoutService,
          useClass: CheckoutServiceStub,
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
