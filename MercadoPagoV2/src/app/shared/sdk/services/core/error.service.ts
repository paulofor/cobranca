/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable  } from 'rxjs';
import 'rxjs/add/observable/throw';
/**
 * Default error handler
 */
@Injectable()
export class ErrorHandler {
  public handleError(errorResponse: HttpErrorResponse): any {
    return Observable.throw(errorResponse.error.error || 'Server error');
  }
}

