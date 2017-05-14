import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usersType, User } from '../../data-model/data-model';
import { AuthService } from '../../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usersType = usersType;
  message: string;
  user = new User('', '', '');
  errorMsg: string;
  errorStatus: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, public router: Router) {
    // this.createForm();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ngOnInit() {
    this.createForm();
    this.authService.logout();
  }

  createForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      clientType: ['', Validators.required]
    });
  }

  onSubmit(form) {
    console.log('the form is valid -> ' + form.valid);
    console.log('the data in form is -> ' + form.value);
  }

  login(userFormData) {
    this.authService.login(userFormData)
      .subscribe(
        data => {
          this.setMessage();
          if (this.authService.isLoggedIn) {
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
            // Set our navigation extras object
            // that passes on our global query params and fragment
            // let navigationExtras: NavigationExtras = {
            //   preserveQueryParams: true,
            //   preserveFragment: true
            // };
            this.errorMsg = '';
            this.errorStatus = false;
            console.log('login.component: redirect from server is: ' + redirect);

            // Redirect the user
            this.router.navigate([redirect]);//, navigationExtras);
          }
        },
        error => {
          this.errorStatus = true;
          this.errorMsg = error._body;
        });
    // .subscribe(() => {
    //       this.setMessage();
    //       if (this.authService.isLoggedIn) {
    //         // Get the redirect URL from our auth service
    //         // If no redirect has been set, use the default
    //         let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

    //         // Set our navigation extras object
    //         // that passes on our global query params and fragment
    //         let navigationExtras: NavigationExtras = {
    //           preserveQueryParams: true,
    //           preserveFragment: true
    //         };

    //         // Redirect the user
    //         this.router.navigate([redirect], navigationExtras);
    //       }
    //     });
  }

  logout() {
    //TODO: call web service that makes logout to remove facade from collection
    this.authService.logout();
    this.setMessage();
  }
}





