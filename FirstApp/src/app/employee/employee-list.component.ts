import { Component, OnInit } from '@angular/core';
import {IEmployee} from './employee.interface';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  srv = 'all';
  searchTerm: string;
  employee: IEmployee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = this.employeeService.getEmployees();
  }
  getAllEmployeesCount(): number {
    return this.employee.length;
  }

  getMaleEmployeesCount(): number {
    return this.employee.filter(e => e.gender === 'Male').length;
  }

  getFemaleEmployeesCount(): number {
    return this.employee.filter(e => e.gender === 'Female').length;
  }

 OnRadioButtonValueChanged(value: string) {
    console.log(value);
    this.srv = value;
 }
}
