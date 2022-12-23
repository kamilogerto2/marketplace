import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { BasketSummaryComponent } from './basket-summary.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BasketFacade } from '../../+state/basket.facade';
import { ItemsListComponent, ListItemComponent } from '@marketplace/design-system';
import { BasketItem } from '../../domain/basket-item.interface';
import { basketFacadeStub } from '../../mocks/basketFacade.mock';

describe('BasketSummaryComponent', () => {
  let component: BasketSummaryComponent;
  let fixture: ComponentFixture<BasketSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketSummaryComponent, ListItemComponent, ItemsListComponent],
      providers: [provideMockStore(), {
        provide: BasketFacade,
        useValue: basketFacadeStub,
      }]
    }).overrideComponent(
      BasketSummaryComponent,
      {set: {providers: [{provide: BasketFacade, useValue: basketFacadeStub}]}})
      .compileComponents();

    fixture = TestBed.createComponent(BasketSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit remove event and trigger remove action', inject([BasketFacade], (basketFacade: BasketFacade) => {
    jest.spyOn(basketFacade, 'removeProductFromBasket');
    jest.spyOn(component.productRemoved, 'emit');

    component.removeItem(4);

    expect(component.productRemoved.emit).toHaveBeenCalled();
    expect(basketFacade.removeProductFromBasket).toHaveBeenCalled();
  }));

  it('trackBy should return id', () => {
    expect(component.trackItem(4, { id: 3 } as BasketItem)).toBe(3);
  });

  it('should render 2 items', () => {
    fixture.detectChanges();

    const basketItemsList = fixture.nativeElement.querySelectorAll('marketplace-list-item');

    expect(basketItemsList.length).toBe(2);
  });
});
