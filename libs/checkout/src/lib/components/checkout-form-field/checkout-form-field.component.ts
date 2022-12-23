import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@marketplace/material';

@Component({
  selector: 'marketplace-checkout-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  templateUrl: './checkout-form-field.component.html',
  styleUrls: ['./checkout-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutFormFieldComponent {
  @Input() label = '';
  @Input() control: FormControl | null = null;
}
