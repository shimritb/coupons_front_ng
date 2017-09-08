import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Coupon } from '../../../../data-model/data-model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-coupon-by-type',
  templateUrl: './coupon-by-type.component.html',
  styleUrls: ['./coupon-by-type.component.css']
})
export class CouponByTypeComponent implements OnInit {
  couponByTypeForm: FormGroup;
  submitted: boolean = false;
  coupons : Coupon[];
  couponTypes = ["RESTURANTS", "ELECTRICITY", "FOOD", "HEALTH", "SPORTS", "CAMPING", "TRAVELLING"];

  constructor( private _companyService: CompanyService, private fb: FormBuilder ) { }

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
    this._companyService.getCouponByType(form.value.couponType)
      .subscribe(coupons => { 
        this.coupons = coupons;
        this.submitted = true;
    });
  }
}
