import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {
  purchaseCouponForm: FormGroup;
  message: string;

  constructor(private _customerService: CustomerService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.purchaseCouponForm = this.fb.group({
      id: ['', Validators.required],
      endDate: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  onSubmit(couponForm) {
    this._customerService.purchaseCoupon(this.purchaseCouponForm.value).subscribe(
      message => { 
        this.message = JSON.stringify(message);
      },
      err => {
        // Log errors if any
         console.log(JSON.stringify(err));
      });
  }
}
