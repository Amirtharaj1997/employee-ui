import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.prod';
import {LeaveApplicationModel} from './leave-application/LeaveApplication.model';
import {Router} from '@angular/router';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cache = {
    holiday: null,
    leave: null,
  };
  alert$: Subject<string> = new Subject<string>();

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
    this.alert$.next('Form Invalid');
  }

  errorHandle(e) {
    if (e.status == 500) {
      this.alert$.next('Internal Server Error');

    } else if (e.status == 401) {
      this.alert$.next('Bad request');
    } else {
      this.alert$.next('Some thing went wrong');
    }
    setTimeout( () => this.alert$.next(null), 3000);
  }
}
