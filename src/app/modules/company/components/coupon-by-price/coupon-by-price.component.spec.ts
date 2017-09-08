import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponByPriceComponent } from './coupon-by-price.component';

describe('CouponByPriceComponent', () => {
  let component: CouponByPriceComponent;
  let fixture: ComponentFixture<CouponByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
