import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(employee: Employee){
    this.employeeService.addEmployee(employee);
    this.router.navigate(['/employees']);
  } 

}
