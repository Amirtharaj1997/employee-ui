import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.prod';
import {LeaveApplicationModel} from './leave-application/LeaveApplication.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cache = {
    holiday: null,
    leave: null,
  };

  constructor(private http: HttpClient, private router: Router) { }

  getHoliday() {
    return this.http.get(environment.endpoint + '/holiday');
  }
  postHoliday(body) {
    return this.http.post(environment.endpoint + '/holiday', body);
  }

  getLeave() {
    return this.http.get(environment.endpoint + '/leave');
  }
  putLeave(body) {
    return this.http.put(environment.endpoint + '/leave', body);
  }

  setLeaveCache(holiday: LeaveApplicationModel) {
    this.cache.leave = holiday ? JSON.parse(JSON.stringify(holiday)) : holiday;
  }
  getLeaveCache() {
    return this.cache.leave;
  }

  setHolidayCache(holiday: LeaveApplicationModel) {
    this.cache.holiday = holiday ? JSON.parse(JSON.stringify(holiday)) : holiday;
  }
  getHolidayCache() {
    return this.cache.holiday;
  }

  routeTo(path: string) {
    this.router.navigate([path]);
  }

  showAlert(invalidForm: string) {

  }

  errorHandle(e) {
  }
}
