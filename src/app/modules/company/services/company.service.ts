import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Coupon } from '../../../data-model/data-model';
import { AppConfig } from '../../../app.config';

@Injectable()
export class CompanyService {

  constructor(private _http: Http, private _config: AppConfig) { }

  getCouponById(id: string) {
    return this._http.get(this._config.apiUrl + '/company_resource/coupon/getCouponById?id=' + id, this.token())
      .map((response: Response) => response.json());
  }

  getAllCoupons() {
    return this._http.get(this._config.apiUrl + '/company_resource/coupon/getCoupons', this.token())
      .map((response: Response) => response.json());
  }

  getCouponByPrice(price:  string) {
    return this._http.get(this._config.apiUrl + '/company_resource/coupon/getCouponByPrice?price=' + price, this.token())
      .map((response: Response) => response.json());
  }

  createCoupon(coupon: string) {
    return this._http.post(this._config.apiUrl + '/company_resource/coupon/create', coupon, this.token())
      .map((response: Response) => response.json());
  }

  getCouponByType(type: string) {
    return this._http.get(this._config.apiUrl + '/company_resource/coupon/getCouponByType?type=' + type, this.token())
      .map((response: Response) => response.json());
  }

  getCouponByDate(date: string) {
    return this._http.get(this._config.apiUrl + '/company_resource/coupon/getCouponByDate?endDate=' + date, this.token())
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
