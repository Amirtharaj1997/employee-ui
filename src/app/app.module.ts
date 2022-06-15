import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { HolidayComponent } from './holiday/holiday.component';
import { LeaveApplicationEditComponent } from './leave-application/leave-application-edit/leave-application-edit.component';
import { HolidayEditComponent } from './holiday/holiday-edit/holiday-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertConfig, AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LeaveApplicationComponent,
    HolidayComponent,
    LeaveApplicationEditComponent,
    HolidayEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule
  ],
  providers: [AlertConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
