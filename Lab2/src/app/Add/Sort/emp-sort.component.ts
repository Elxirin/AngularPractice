import { Component, OnInit } from '@angular/core';
import { EmployeeData } from './EmployeeData';
import { EmployeeDataService } from './employee-data.service';

@Component({
  selector: 'app-emp-sort',
  templateUrl: './emp-sort.component.html',
  styleUrls: ['./emp-sort.component.css']
})
export class EmpSortComponent implements OnInit {

  employees: EmployeeData[];
  constructor(private employeeDataService: EmployeeDataService) { }

  ngOnInit() {
    this.employees = this.employeeDataService.getEmployee();
    console.log(this.employees);
  }

  sort(value: any) {
   switch (value) {
     case "empId" :
     this.employees = this.employees.sort( (a, b) => a.empId - b.empId );
     break;

     case "empName" :
     this.employees = this.employees.sort( (a, b) => a.empName < b.empName ? -1 : 1 );
     break;

     case "empSal" :
     this.employees = this.employees.sort( (a, b) => a.empSal - b.empSal );
     break;

     case "empDep" :
     this.employees = this.employees.sort( (a, b) => a.empDep < b.empDep ? -1 : 1 );
     break;
    }
  }
}
