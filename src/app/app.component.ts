import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  //title = 'http-demo';
  employees: any;
  constructor(private employeeService: APIService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.employeeService.getEmployeesHttp().subscribe(
      (data: any)=>{
        console.log(data);
        this.employees = data;
      }
    )
  }
}
