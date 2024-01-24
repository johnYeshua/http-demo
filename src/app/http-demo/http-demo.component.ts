import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrl: './http-demo.component.css'
})
export class HttpDemoComponent implements OnInit{
  employees: any;

  constructor(private employeeService: EmployeeService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.employeeService.getEmployees().subscribe((data: any) =>{
    console.log(data);
    this.employees = data;
   });
  }



















/***
 * import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
 */








  // ngOnInit(): void {
  //     this.getEmployeesJson();
  // }
  // getEmployeesJson(){
  //   this.employeeService.getEmployees().subscribe(
  //     data=>{
  //     this.employees = data;
  //   });
  // }


  // getEmployees(): Observable<Object>{
  //   return this.http.get(this.url);
  // }
}
