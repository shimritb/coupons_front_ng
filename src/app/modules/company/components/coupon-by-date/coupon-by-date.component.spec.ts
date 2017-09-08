import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponByDateComponent } from './coupon-by-date.component';

describe('CouponByDateComponent', () => {
  let component: CouponByDateComponent;
  let fixture: ComponentFixture<CouponByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
