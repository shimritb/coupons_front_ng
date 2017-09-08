import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private _adminService: AdminService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerForm = this.fb.group({
      custName: ['', Validators.required],
      password: ['', Validators.required]  
    });
  }

  onSubmit(form) {  
    this._adminService.createCustomer(form.value).subscribe(
      message => { 
        console.log(JSON.parse(JSON.stringify(message)));
      },
      err => {
        console.log(JSON.stringify(err));
      });
  }
}
