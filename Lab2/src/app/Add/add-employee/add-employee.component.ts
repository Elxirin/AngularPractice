import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '../../../../node_modules/@angular/router';
import { NgForm, FormGroup } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee : Employee[];
  emp: Employee;
  updateForm: FormGroup;
  checkUpdate: boolean = false;
   empId:number;
   empName:string;
   empSalary:number;
  empDept:string;
  
  @ViewChild('userForm',{static: false})
  public createEmployeeForm: NgForm;
  constructor(private employeeService: EmployeeService, private router: Router) { }
  
  ngOnInit() {
    this.employee = this.employeeService.getEmployee();
    
  }

  onSubmit(employee: Employee) {
    this.employeeService.addEmployee(employee);
    this.employee = this.employeeService.getEmployee();
  }

  deleteEmployee(id) {
    this.employee = this.employeeService.deleteEmployee(id);
  }

  updateEmployee(id) {
    this.checkUpdate = true;
    this.emp =this.employee.find(e=>e.empId===id);
     this.empId=this.emp.empId;
     this.empName=this.emp.empName;
    this.empSalary=this.emp.empSalary;
     this.empDept=this.emp.empDept;
  }

  updateEmpAdd(empl: Employee) {
    let i = this.employee.findIndex(e => e.empId === this.emp.empId);
    console.log(empl);
    this.employee[i].empId = this.empId;
    this.employee[i].empName = this.empName;
    this.employee[i].empSalary = this.empSalary;
    this.employee[i].empDept = this.empDept;
    
  }
}
