import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponByIdComponent } from './coupon-by-id.component';

describe('CouponByIdComponent', () => {
  let component: CouponByIdComponent;
  let fixture: ComponentFixture<CouponByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
