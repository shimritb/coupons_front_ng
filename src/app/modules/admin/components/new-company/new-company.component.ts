import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private _adminService: AdminService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.companyForm = this.fb.group({
      compName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]    
    });
  }

  onSubmit(form) {  
    this._adminService.createCompany(form.value).subscribe(
      message => { 
        console.log(JSON.parse(JSON.stringify(message)));
      },
      err => {
        console.log(JSON.stringify(err));
      });
  }
}
