import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private _adminService: AdminService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.companyForm = this.fb.group({
      id: ['', Validators.required],
      compName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]    
    });
  }

  onSubmit(form) {  
    this._adminService.updateCompany(form.value).subscribe(
      message => { 
        console.log(JSON.parse(JSON.stringify(message)));
      },
      err => {
        console.log(JSON.stringify(err));
      });
  }
}
