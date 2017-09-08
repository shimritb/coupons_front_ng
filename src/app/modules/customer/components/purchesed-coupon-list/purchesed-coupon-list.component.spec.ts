import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchesedCouponListComponent } from './purchesed-coupon-list.component';

describe('PurchesedCouponListComponent', () => {
  let component: PurchesedCouponListComponent;
  let fixture: ComponentFixture<PurchesedCouponListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchesedCouponListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchesedCouponListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
