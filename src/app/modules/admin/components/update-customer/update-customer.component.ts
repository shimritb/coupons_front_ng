import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private _adminService: AdminService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerForm = this.fb.group({
      id: ['', Validators.required],
      custName: ['', Validators.required],
      password: ['', Validators.required]   
    });
  }

  onSubmit(form) {  
    this._adminService.updateCustomer(form.value).subscribe(
      message => { 
        console.log(JSON.parse(JSON.stringify(message)));
      },
      err => {
        console.log(JSON.stringify(err));
      });
  }
}
