import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-holiday-edit',
  templateUrl: './holiday-edit.component.html',
  styleUrls: ['./holiday-edit.component.scss']
})
export class HolidayEditComponent implements OnInit, OnDestroy{
  holidayForm: FormGroup;
  constructor(private fb: FormBuilder, public api: ApiService) {}

  ngOnInit() {
    this.holidayForm = this.initForm();
    const data = this.api.getHolidayCache();
    if (data) {
      this.holidayForm.patchValue( {...data, ...{holidayDate: new Date(data.holidayDate)}} );
    }
  }

  submit() {
    if (this.holidayForm.valid) {
      let data = this.api.getLeaveCache();
      this.api.putLeave({...data, ...this.holidayForm.value}).subscribe(res => {
        data = res;
        this.holidayForm.patchValue( {...data, ...{holidayDate: new Date(data.holidayDate)}} );
      }, e =>  this.api.errorHandle(e));
    } else {
      this.api.showAlert('Invalid form');
    }
  }

  private initForm() {
    return this.fb.group( {
      reason: [null, [Validators.required]],
      holidayDate: [null, [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    this.api.setHolidayCache(null);
  }
}
