import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedCouponsByPriceComponent } from './purchased-coupons-by-price.component';

describe('PurchasedCouponsByPriceComponent', () => {
  let component: PurchasedCouponsByPriceComponent;
  let fixture: ComponentFixture<PurchasedCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
