import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrServise {
  success(message: string, title?: string, options = {positionClass: 'toast-top-center'}) {
    toastr.success(message, title, options);
  }
  info(message: string, title?: string, options = {positionClass: 'toast-top-center'}) {
    toastr.info(message, title, options);
  }
  warning(message: string, title?: string, options = {positionClass: 'toast-top-center'}) {
    toastr.warning(message, title, options);
  }
  error(message: string, title?: string, options = {positionClass: 'toast-top-center'}) {
    toastr.error(message, title, options);
  }
}
