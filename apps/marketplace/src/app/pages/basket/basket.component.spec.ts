import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import { TransactionService } from '../../shared/services/transaction.service';
import { TransactionServiceStub } from '../../mocks/transaction-service.mock';
import { provideMockStore } from '@ngrx/store/testing';

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BasketComponent ],
      providers: [
        {
          provide: TransactionService,
          useClass: TransactionServiceStub,
        },
        provideMockStore() ]
    }).compileComponents();

    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
