import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Customer } from '../../../../data-model/data-model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {
  customer = Customer;
  submitted: boolean = false;
  customerIdForm: FormGroup;

  constructor(private _adminService: AdminService, private fb: FormBuilder ) { 
  
  }

  ngOnInit() {
    this.createForm();
    this.submitted = false;
  }

  createForm() {
    this.customerIdForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  onSubmit(form) {
    this._adminService.getCustomerById(form.value.id)
      .subscribe(customer => { 
        this.customer = customer;
        this.submitted = true;
      });
  }
}

