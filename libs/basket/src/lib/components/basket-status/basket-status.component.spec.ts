import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { BasketStatusComponent } from './basket-status.component';
import { BasketFacade } from '../../+state/basket.facade';
import { basketFacadeStub } from '../../mocks/basketFacade.mock';

describe('BasketStatusComponent', () => {
  let component: BasketStatusComponent;
  let fixture: ComponentFixture<BasketStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketStatusComponent],
      providers: [provideMockStore(), {
        provide: BasketFacade,
        useValue: basketFacadeStub,
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(BasketStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
