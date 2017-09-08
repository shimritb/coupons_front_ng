import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerService } from '../../services/customer.service';
import { Coupon } from '../../../../data-model/data-model';

@Component({
  selector: 'app-purchesed-coupon-list',
  templateUrl: './purchesed-coupon-list.component.html',
  styleUrls: ['./purchesed-coupon-list.component.css']
})
export class PurchesedCouponListComponent implements OnInit {
  coupons : Coupon[];

  constructor(private _companyService: CustomerService) { }

  ngOnInit() {
     this._companyService.getAllPurchasedCoupons()
      .subscribe(coupons => { 
        this.coupons = coupons;
      });
  }
}
