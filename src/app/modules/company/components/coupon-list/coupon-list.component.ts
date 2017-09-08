import { Component, OnInit } from '@angular/core';

import { Coupon } from '../../../../data-model/data-model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {
  coupons : Coupon[];

  constructor(private _companyService: CompanyService) { }

  ngOnInit() {
     this._companyService.getAllCoupons()
      .subscribe(coupons => { 
        this.coupons = coupons;
      });
  }
}
