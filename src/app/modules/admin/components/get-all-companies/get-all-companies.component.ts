import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Company } from '../../../../data-model/data-model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {
  companies : Company[];
  
    constructor(private _adminService: AdminService) { }
  
    ngOnInit() {
       this._adminService.getAllCompanies()
        .subscribe(companies => { 
          this.companies = companies;
        });
    }
}
