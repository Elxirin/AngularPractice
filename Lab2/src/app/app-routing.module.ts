import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './Add/add-employee/add-employee.component';
import { EmpSortComponent } from './Add/Sort/emp-sort.component';


const routes: Routes = [
  {path:"add" , component:AddEmployeeComponent},
  {path:"sort", component:EmpSortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
