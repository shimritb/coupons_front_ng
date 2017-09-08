import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Coupon } from '../../../data-model/data-model';

import { AppConfig } from '../../../app.config';

@Injectable()
export class CustomerService {

  constructor(private _http: Http, private _config: AppConfig) { }

  purchaseCoupon(coupon: string) {
    return this._http.post(this._config.apiUrl + '/customer_resource/coupon/purchase', coupon, this.token())
      .map((response: Response) => response.json());
  }

  getAllPurchesedCouponByPrice(price:  string) {
    return this._http.get(this._config.apiUrl + '/customer_resource/coupon/getAllPurchasedCouponsByPrice?price=' + price, this.token())
      .map((response: Response) => response.json());
  }

  getAllPurchasedCoupons() {
    return this._http.get(this._config.apiUrl + '/customer_resource/coupon/getAllPurchasedCoupons', this.token())
      .map((response: Response) => response.json());
  }

  getAllPurchesedCouponByType(type: string) {
    return this._http.get(this._config.apiUrl + '/customer_resource/coupon/getAllPurchasedCoupons?type=' + type, this.token())
      .map((response: Response) => response.json());
  }

  private token() {
    // create authorization header with token
    let currentUser = JSON.parse(localStorage.getItem('current_user'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

}
