import { Component } from '@angular/core';

import { ToastService } from './toast/toast.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-app';
  toastTypes: Array<any> = [];

  constructor(private toastService: ToastService) {
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
  }
  //success, info, warning, danger
  showToast() {
    const rand = Math.floor(Math.random() * 4);
    const toastType = this.toastTypes[rand];
    const toastMessage = 'hi this is a message my random number is: ' + rand;
    const duration = 2000;
    this.toastService.showToast(toastType, toastMessage, duration);

  }
}