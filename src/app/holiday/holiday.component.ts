import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  holidays: Array<any>;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getHoliday().subscribe(res => {
      this.holidays = res as Array<any>;
    }, err => this.api.errorHandle(err));
  }
  routeTo(holiday) {
    this.api.setHolidayCache(holiday);
    this.api.routeTo('edit-holiday');
  }

}
