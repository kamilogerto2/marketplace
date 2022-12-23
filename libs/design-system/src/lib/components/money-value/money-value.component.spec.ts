import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyValueComponent } from './money-value.component';

describe('MoneyValueComponent', () => {
  let component: MoneyValueComponent;
  let fixture: ComponentFixture<MoneyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyValueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
