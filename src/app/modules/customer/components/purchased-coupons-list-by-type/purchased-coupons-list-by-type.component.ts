import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Coupon } from '../../../../data-model/data-model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-purchased-coupons-list-by-type',
  templateUrl: './purchased-coupons-list-by-type.component.html',
  styleUrls: ['./purchased-coupons-list-by-type.component.css']
})
export class PurchasedCouponsListByTypeComponent implements OnInit {
  couponByTypeForm: FormGroup;
  submitted: boolean = false;
  coupons : Coupon[];
  couponTypes = ["RESTURANTS", "ELECTRICITY", "FOOD", "HEALTH", "SPORTS", "CAMPING", "TRAVELLING"];

  constructor( private _customerService: CustomerService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.createForm();
    this.submitted = false;
  }

  createForm() {
   this.couponByTypeForm = this.fb.group({
     couponType: ['', Validators.required]
   });
  }

  onSubmit(form) {
    this._customerService.getAllPurchesedCouponByType(form.value.couponType)
      .subscribe(coupons => { 
        this.coupons = coupons;
        this.submitted = true;
    });
  }
}
