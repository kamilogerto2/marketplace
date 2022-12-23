import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletStatusComponent } from './wallet-status.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('WalletStatusComponent', () => {
  let component: WalletStatusComponent;
  let fixture: ComponentFixture<WalletStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletStatusComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(WalletStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
