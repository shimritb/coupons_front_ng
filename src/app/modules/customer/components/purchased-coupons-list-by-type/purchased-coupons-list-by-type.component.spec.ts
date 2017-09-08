import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedCouponsListByTypeComponent } from './purchased-coupons-list-by-type.component';

describe('PurchasedCouponsListByTypeComponent', () => {
  let component: PurchasedCouponsListByTypeComponent;
  let fixture: ComponentFixture<PurchasedCouponsListByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedCouponsListByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedCouponsListByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
