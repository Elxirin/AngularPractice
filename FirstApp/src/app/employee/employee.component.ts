import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  employee: IEmployee = {
    code: 'a001',
    name: 'Sara',
    gender: 'Female',
    annualSalary: 900000,
    dateOfBirth: '2431997'
  };

  pageHeader = 'Employee Information';
  ngOnInit() {
  }

}
