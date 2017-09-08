import { Component, OnInit, NgModule} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Coupon } from '../../../../data-model/data-model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-coupon-by-price',
  templateUrl: './coupon-by-price.component.html',
  styleUrls: ['./coupon-by-price.component.css']
})
export class CouponByPriceComponent implements OnInit {
  couponByPriceForm: FormGroup;
  submitted: boolean = false;
  coupons : Coupon[];

  constructor(private _companyService: CompanyService, private fb: FormBuilder ) { 
  
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
    this._companyService.getCouponByPrice(form.value.price)
      .subscribe(coupons => { 
        this.coupons = coupons;
        this.submitted = true;
      });
  }
}
