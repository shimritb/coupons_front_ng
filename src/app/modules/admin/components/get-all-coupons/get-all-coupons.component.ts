import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Coupon } from '../../../../data-model/data-model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {
  coupons : Coupon[];
  
    constructor(private _adminService: AdminService) { }
  
    ngOnInit() {
       this._adminService.getAllCoupons()
        .subscribe(coupons => { 
          this.coupons = coupons;
        });
    }
  }
