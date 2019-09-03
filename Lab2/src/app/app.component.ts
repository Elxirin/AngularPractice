import { Component } from '@angular/core';
import { EmployeeService } from './Add/employee.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab2';
  constructor(private employeeService: EmployeeService, private router: Router) { }

  navigate(nav: string) {
    if (nav==="Exercise1") {
      this.router.navigate(['/add']);
    }
    else
    this.router.navigate(['/sort']);
  }
}
