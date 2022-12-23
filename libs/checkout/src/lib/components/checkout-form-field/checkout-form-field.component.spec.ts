import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormFieldComponent } from './checkout-form-field.component';

describe('CheckoutFormFieldComponent', () => {
  let component: CheckoutFormFieldComponent;
  let fixture: ComponentFixture<CheckoutFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutFormFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
