import { Component, OnInit } from '@angular/core';
import {LeaveApplicationModel} from './LeaveApplication.model';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {
  holidays: Array<LeaveApplicationModel>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLeave().subscribe(res => {
     this.holidays = res as Array<LeaveApplicationModel>;
    }, err => this.api.errorHandle(err));
  }

  routeTo(holiday: LeaveApplicationModel) {
    this.api.setLeaveCache(holiday);
    this.api.routeTo('edit-leave-application');
  }
}
