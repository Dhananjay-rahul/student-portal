import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './loader.service';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { baseUrl, END_POINT } from '../config/url.const';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // referer: string = 'MAIN';
  // prodUrl = .baseUrl;

  constructor(
    private _http: HttpClient,
    private toastr: ToastrService,
    private loader: LoaderService
  ) {}

  getCourses(): Observable<any[]> {
    return this._http
      .get<any[]>(`${baseUrl + END_POINT.course}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getEvents(): Observable<any[]> {
    return this._http
      .get<any[]>(`${baseUrl + END_POINT.event}`)
      .pipe(retry(1), catchError(this.handleError));
  }
  getAlumnies(): Observable<any[]> {
    return this._http
      .get<any[]>(`${baseUrl + END_POINT.alumni}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    this.toastr.error(errorMessage, 'Error!', {
      timeOut: 5000,
    });
    this.loader.showLoader(false);

    return throwError(errorMessage);
  }
}
