import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private http: Http, private config: AppConfig) { }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(userCredentials: string) {
     return this.http.post(this.config.apiUrl + '/login_resource/login', userCredentials)
      .map((response: Response) => {
        // login successful if there's a token in the response
        let user = response.json();
       
        if (user && user.redirectUrl && user.token) {
          localStorage.setItem('current_user', JSON.stringify(user));
          this.redirectUrl = user.redirectUrl;
          this.isLoggedIn = true;
        }
      });
  }

  logout() {
    let currentUser = JSON.parse(localStorage.getItem('current_user')); // no need to parse since the only values in localstorage is token

    if (currentUser && currentUser.token ) {
      let headers = new Headers({ 'Authorization': currentUser.token });
      let options = new RequestOptions({ headers: headers });

      this.http.post(this.config.apiUrl + '/login_resource/logout', options);
      
    }

    // remove user from local storage to log user out
    localStorage.removeItem('current_user');

    this.isLoggedIn = false;

    this.redirectUrl = '/home';
  }
}