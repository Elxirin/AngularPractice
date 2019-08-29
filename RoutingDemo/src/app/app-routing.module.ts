import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { AddEmployeeComponent } from './employee/add/add-employee.component';
import { HomeComponent } from './employee/home/home.component';


const routes: Routes = [
  {path: "employees", component: EmployeeListComponent},
  {path: "add", component: AddEmployeeComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
