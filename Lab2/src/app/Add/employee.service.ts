import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: Employee[]= [
    {empId:1001,empName:"Rahul",empSalary:9000,empDept:"Java"},
    {empId:1002,empName:"Sachin",empSalary:19000,empDept:"OraApps"},
    {empId:1003,empName:"Vikash",empSalary:29000,empDept:"BI"},
    ];




  constructor(private http: HttpClient) { 
    this.populateEmployee().subscribe( data => this.employee = data, error => console.log(error) );
  }

  populateEmployee(): Observable<Employee[]> {
      return  this.http.get<Employee[]>("../../assets/employee.json");
  }


  getEmployee(): Employee[] {
    return this.employee; 
  }

  addEmployee(employee: Employee) {
    this.employee.push(employee);
  }

  deleteEmployee(id): Employee[] {
      return this.employee = this.employee.filter( emp => emp.empId !== id);
  }

  
}
