import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Leave Application';
  constructor(public activeRouter: Router, public api: ApiService) {
  }
}
