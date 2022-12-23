import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconActionBoxComponent } from './icon-action-box.component';

describe('IconActionBoxComponent', () => {
  let component: IconActionBoxComponent;
  let fixture: ComponentFixture<IconActionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconActionBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconActionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
