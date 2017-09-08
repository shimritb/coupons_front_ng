import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Company } from '../../../../data-model/data-model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {
  company = Company;
  submitted: boolean = false;
  companyIdForm: FormGroup;

  constructor(private _adminService: AdminService, private fb: FormBuilder ) { 
  
  }

  ngOnInit() {
    this.createForm();
    this.submitted = false;
  }

  createForm() {
    this.companyIdForm = this.fb.group({
      id: ['', Validators.required]
    });
  }

  onSubmit(form) {
    this._adminService.getCompanyById(form.value.id)
      .subscribe(company => { 
        this.company = company;
        this.submitted = true;
      });
  }
}
