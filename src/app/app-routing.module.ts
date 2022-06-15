import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaveApplicationComponent} from './leave-application/leave-application.component';
import {HolidayComponent} from './holiday/holiday.component';
import {
  LeaveApplicationEditComponent
} from './leave-application/leave-application-edit/leave-application-edit.component';
import {HolidayEditComponent} from './holiday/holiday-edit/holiday-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'leave-application',
    pathMatch: 'full'
  },
  {
    path: 'leave-application',
    component: LeaveApplicationComponent
  },
  {
    path: 'edit-leave-application',
    component: LeaveApplicationEditComponent
  },
  {
    path: 'holiday',
    component: HolidayComponent
  },
  {
    path: 'edit-holiday',
    component: HolidayEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
