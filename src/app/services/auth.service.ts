import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/delay';

import { AppConfig } from '../app.config';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private http: Http, private config: AppConfig) { }


  // store the URL so we can redirect after logging in
  // redirectUrl: string;
  redirectUrl: string;

  login(userCredentials: string) {
     return this.http.post(this.config.apiUrl + '/login_resource/login', userCredentials)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
       
        // console.log('RESPONSE ' + JSON.parse(user));
        if (user && user.redirectUrl && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('current_user', JSON.stringify(user));
          console.log('authSevice: RESPONSE urls: ' + user.redirectUrl);
          this.redirectUrl = user.redirectUrl;
          this.isLoggedIn = true;
        }
      });
  }

  logout() {
    let currentUser = JSON.parse(localStorage.getItem('current_user')); // no need to parse since the only values in localstorage is token
    // let currentUser = localStorage.getItem('current_user')


    if (currentUser && currentUser.token ) {
      let headers = new Headers({ 'Authorization': currentUser.token });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.config.apiUrl + '/login_resource/logout', options);
      
    }

    this.isLoggedIn = false;
    // remove user from local storage to log user out
    localStorage.removeItem('current_user');

    this.redirectUrl = '/home';
  }
}