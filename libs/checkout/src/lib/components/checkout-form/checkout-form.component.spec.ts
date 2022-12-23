import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CheckoutFormComponent } from './checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutService } from '../../services/checkout.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutServiceStub } from '../../mocks/checkout-service.mock';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;
  let checkoutServiceStub = new CheckoutServiceStub();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CheckoutFormComponent, ReactiveFormsModule],
      providers: [{
        provide: CheckoutService,
        useValue: checkoutServiceStub,
      }]
    })
      .overrideComponent(CheckoutFormComponent, {set: {providers: [{provide: CheckoutService, useValue: checkoutServiceStub,}]}})
      .compileComponents();

    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('form is valid with proper data', () => {
    component.form.setValue({
      name: 'John',
      last_name: 'Smith',
      street: 'Road',
      city: 'Arizona',
      state: 'Arizona',
      email: 'example@sd.sd'
    })

    expect(component.form.valid).toBeTruthy();
    expect(component.form.controls.name.valid).toBeTruthy();
    expect(component.form.controls.city.valid).toBeTruthy();
    expect(component.form.controls.state.valid).toBeTruthy();
    expect(component.form.controls.street.valid).toBeTruthy();
    expect(component.form.controls.last_name.valid).toBeTruthy();
    expect(component.form.controls.email.valid).toBeTruthy();
  });

  it('City, State, Street are not valid - should start with Capital letter', () => {
    component.form.controls.city.setValue('arizona')
    component.form.controls.state.setValue('arizona')
    component.form.controls.street.setValue('arizona')

    expect(component.form.controls.city.valid).toBeFalsy();
    expect(component.form.controls.state.valid).toBeFalsy();
    expect(component.form.controls.street.valid).toBeFalsy();
  });

  it('City, State - should have only letters', () => {
    component.form.controls.city.setValue('Arizona12')
    component.form.controls.state.setValue('Arizona43')

    expect(component.form.controls.city.valid).toBeFalsy();
    expect(component.form.controls.state.valid).toBeFalsy();
  });

  it('Email should have proper format - with @', () => {
    component.form.controls.email.setValue('example')

    expect(component.form.controls.email.valid).toBeFalsy();
  });

  it('Email should have proper format - with dot', () => {
    component.form.controls.email.setValue('example@dgh')

    expect(component.form.controls.email.valid).toBeFalsy();
  });

  it('Pay should trigger checking transaction', inject([CheckoutService], (checkoutService: CheckoutService) => {
    jest.spyOn(checkoutService, 'validateTransaction');

    component.pay()

    expect(checkoutService.validateTransaction).toHaveBeenCalled();
  }));
});
