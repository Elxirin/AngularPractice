import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './employee/home/home.component';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { AddEmployeeComponent } from './employee/add/add-employee.component';
import { EmployeeService } from './employee/employee.service';
import { EmployeeComponent } from './employee/emp/employee.component';
import { SearchEmployeeComponent } from './employee/srch/search-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
