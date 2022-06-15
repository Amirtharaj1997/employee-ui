import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-leave-application-edit',
  templateUrl: './leave-application-edit.component.html',
  styleUrls: ['./leave-application-edit.component.scss']
})
export class LeaveApplicationEditComponent implements OnInit, OnDestroy {
  leaveApplication: FormGroup;
  constructor(private fb: FormBuilder, public api: ApiService) { }

  ngOnInit() {
    this.leaveApplication = this.initForm();
    const data = this.api.getLeaveCache();
    if (data) {
      this.leaveApplication.patchValue( {...data, ...{dateRange: [new Date(data.fromDate), new Date(data.toDate)]}} );
    }
  }

  initForm() {
    return this.fb.group( {
      employeeId: ['', [Validators.required]],
      employeeName: ['', [Validators.required]],
      department: ['', [Validators.required]],
      noOfLeave: [0, [Validators.required]],
      dateRange: [[], [Validators.required]],
    });
  }
  ngOnDestroy() {
    this.api.setLeaveCache(null);
  }

  submit() {
    if (this.leaveApplication.valid) {
      let data = this.api.getLeaveCache();
      this.api.putLeave({...data, ...this.leaveApplication.value,
        ...{
          fromDate: this.leaveApplication.value.dateRange[0],
          toDate: this.leaveApplication.value.dateRange[1]
        }}).subscribe(res => {
          data = res;
        this.leaveApplication.patchValue( {...data, ...{dateRange: [new Date(data.fromDate), new Date(data.toDate)]}} );
      }, e =>  this.api.errorHandle(e));
    } else {
      this.api.showAlert('Invalid form');
    }
  }
}
