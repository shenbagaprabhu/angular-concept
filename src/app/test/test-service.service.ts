import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from './Test';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  public http;
  constructor(http:HttpClient) { 
    this.http = http;
  }

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>("/assets/data/employee.json").pipe(
      catchError(this.handleError)
    );
  }

  handleError(error:HttpErrorResponse){
    return throwError(error.message || "SeverError");
  }
}
