import { Component, OnInit, NgModule  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Coupon } from '../../../../data-model/data-model';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-coupon-by-id',
  templateUrl: './coupon-by-id.component.html',
  styleUrls: ['./coupon-by-id.component.css']
})
export class CouponByIdComponent implements OnInit {
  coupon = Coupon;
  submitted: boolean = false;
  couponIdForm: FormGroup;

  constructor(private _companyService: CompanyService, private fb: FormBuilder ) { 
  
  }

  ngOnInit() {
    this.createForm();
    this.submitted = false;
  }

  createForm() {
    this.couponIdForm = this.fb.group({
      id: ['', Validators.required]
    });
  }


  onSubmit(form) {
    console.log('coupon id from form -> ' + form.value.id);
    this._companyService.getCouponById(form.value.id)
      .subscribe(coupon => { 
        this.coupon = coupon;
        this.submitted = true;
        console.log(coupon);
      });
  }
}
