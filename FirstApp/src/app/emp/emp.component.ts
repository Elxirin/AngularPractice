import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  employee = {
    firstName: 'Tom',
    lastName: 'Hastings',
    gender: 'Male',
    age: 22
  };
  showDetails = false;
  toggleDetails() {
      this.showDetails = !this.showDetails;
  }
  constructor() { }

  ngOnInit() {
  }

}
