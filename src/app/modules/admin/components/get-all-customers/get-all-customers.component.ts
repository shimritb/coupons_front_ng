import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Customer } from '../../../../data-model/data-model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
  customers: Customer[];
  
    constructor(private _adminService: AdminService) { }
  
    ngOnInit() {
       this._adminService.getAllCustomers()
        .subscribe(customers => { 
          this.customers = customers;
        });
    }
}
