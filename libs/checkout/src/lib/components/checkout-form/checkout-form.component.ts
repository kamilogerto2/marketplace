import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MaterialModule } from '@marketplace/material';
import { ButtonComponent } from '@marketplace/design-system';

import { CheckoutService } from '../../services/checkout.service';
import { CheckoutFormFieldComponent } from '../checkout-form-field/checkout-form-field.component';

@Component({
  selector: 'marketplace-checkout-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, ButtonComponent, CheckoutFormFieldComponent],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutFormComponent {
  @Output() transactionSucceeded: EventEmitter<void> = new EventEmitter();

  emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/;
  letterPattern = /[A-Z][a-zA-Z ]+$/;
  firstLetterUppercasePattern = /[A-Z]\S+/;
  isValidTransaction = false;
  transactionError: string | null | undefined = null;
  form = this.formBuilder.nonNullable.group({
    name: this.formBuilder.nonNullable.control('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    last_name: ['', [
      Validators.required,
      Validators.maxLength(255),
    ]],
    street: ['', [
      Validators.required,
      Validators.maxLength(255),
      Validators.pattern(this.firstLetterUppercasePattern),
    ]],
    city: ['', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(this.letterPattern),
    ]],
    state: ['', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(this.letterPattern),
    ]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  });

  constructor(private formBuilder: FormBuilder, private checkoutService: CheckoutService) {}

  pay(): void {
    this.checkoutService.validateTransaction(this.form.getRawValue()).subscribe(({ isValid, error }) => {
      this.isValidTransaction = isValid;
      this.transactionError = error;
      this.transactionSucceeded.emit();
    })
  }
}
