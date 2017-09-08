import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Coupon } from '../../../../data-model/data-model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-coupon-by-date',
  templateUrl: './coupon-by-date.component.html',
  styleUrls: ['./coupon-by-date.component.css']
})
export class CouponByDateComponent implements OnInit {
  couponByDateForm: FormGroup;
  submitted: boolean = false;
  coupons : Coupon[];

  constructor( private _companyService: CompanyService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.createForm();
    this.submitted = false;
  }

  createForm() {
   this.couponByDateForm = this.fb.group({
     couponDate: ['', Validators.required]
   });
  }

  onSubmit(form) {
    this._companyService.getCouponByDate(form.value.couponDate)
      .subscribe(coupons => { 
        this.coupons = coupons;
        this.submitted = true;
    });
  }
}
