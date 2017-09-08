import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Coupon } from '../../../../data-model/data-model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-purchased-coupons-by-price',
  templateUrl: './purchased-coupons-by-price.component.html',
  styleUrls: ['./purchased-coupons-by-price.component.css']
})
export class PurchasedCouponsByPriceComponent implements OnInit {
  couponByPriceForm: FormGroup;
  submitted: boolean = false;
  coupons : Coupon[];

  constructor(private _customerService: CustomerService, private fb: FormBuilder ) { 
  
  }

  ngOnInit() {
    this.createForm();
    this.submitted = false;
  }

  createForm() {
    this.couponByPriceForm = this.fb.group({
      price: ['', Validators.required]
    });
  }

  onSubmit(form) {
    this._customerService.getAllPurchesedCouponByPrice(form.value.price)
      .subscribe(coupons => { 
        this.coupons = coupons;
        this.submitted = true;
      });
  }
}
