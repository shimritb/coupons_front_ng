import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { Coupon } from '../../../../data-model/data-model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-create-new-coupon',
  templateUrl: './create-new-coupon.component.html',
  styleUrls: ['./create-new-coupon.component.css']
})
export class CreateNewCouponComponent implements OnInit {
  couponForm: FormGroup
  message: string;

  constructor(private _companyService: CompanyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.couponForm = this.fb.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['', Validators.required],
      message: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

   onSubmit(couponForm) {
    // console.log('coupon id from form -> ' + form.value.id);
    console.log('debug purpose, coupon data-> ' + couponForm.value.toString());
    // let form = JSON.stringify(this.couponForm.value);
    this._companyService.createCoupon(this.couponForm.value).subscribe(
      message => { 
        this.message = JSON.parse(JSON.stringify(message));
      },
      err => {
        // Log errors if any
        console.log(err)
      });
  }

  

}
