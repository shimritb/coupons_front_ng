import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponByTypeComponent } from './coupon-by-type.component';

describe('CouponByTypeComponent', () => {
  let component: CouponByTypeComponent;
  let fixture: ComponentFixture<CouponByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
