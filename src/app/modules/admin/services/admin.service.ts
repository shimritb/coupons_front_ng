import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Coupon, Company } from '../../../data-model/data-model';
import { AppConfig } from '../../../app.config';

@Injectable()
export class AdminService {

  constructor(private _http: Http, private _config: AppConfig) { }

  createCompany(company: string) {
    return this._http.post(this._config.apiUrl + '/admin_resource/company/create', company, this.token())
      .map((response: Response) => response.json());
  }

  removeCompany(company: string) {
    return this._http.post(this._config.apiUrl + '/admin_resource/company/remove', company, this.token())
      .map((response: Response) => response.json());
  }

  updateCompany(company: string) {
    return this._http.post(this._config.apiUrl + '/admin_resource/company/update', company, this.token())
      .map((response: Response) => response.json());
  }

  getCompanyById(id: string) {
    return this._http.get(this._config.apiUrl + '/admin_resource/company/get?id=' + id, this.token())
      .map((response: Response) => response.json());
  }

  getAllCompanies() {
    return this._http.get(this._config.apiUrl + '/admin_resource/company/getAllCompanies', this.token())
      .map((response: Response) => response.json());
  }

  createCustomer(customer: string) {
    return this._http.post(this._config.apiUrl + '/admin_resource/customer/create', customer, this.token())
      .map((response: Response) => response.json());
  }

  removeCustomer(customer: string) {
    return this._http.post(this._config.apiUrl + '/admin_resource/customer/remove', customer, this.token())
      .map((response: Response) => response.json());
  }

  updateCustomer(customer: string) {
    return this._http.post(this._config.apiUrl + '/admin_resource/customer/update', customer, this.token())
      .map((response: Response) => response.json());
  }

  getCustomerById(id: string) {
    return this._http.get(this._config.apiUrl + '/admin_resource/customer/get?id=' + id, this.token())
      .map((response: Response) => response.json());
  }

  getAllCustomers() {
    return this._http.get(this._config.apiUrl + '/admin_resource/customer/getAllCustomer', this.token())
      .map((response: Response) => response.json());
  }

  getAllCoupons() {
    return this._http.get(this._config.apiUrl + '/admin_resource/getAllCoupon', this.token())
      .map((response: Response) => response.json());
  }

  private token() {
    let currentUser = JSON.parse(localStorage.getItem('current_user'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
