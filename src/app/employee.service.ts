import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url: string = 'http://localhost:4200/../assets/employees.json'
  constructor(private http: HttpClient) { }

  // getEmployees(){
  //   return this.http.get(this.url);
  // }

  /**
   * RxJS is a library for composing asynchronous 
   * and event-based programs by using observable sequences. 
   * It provides one core type, the Observable, satellite ...
   * @returns A representation of any set of values over any amount of time. This is the most basic building block of RxJS.
   * @class — Observable
   */
   getEmployees(): Observable<Object>{
    return this.http.get(this.url);
  }
}
