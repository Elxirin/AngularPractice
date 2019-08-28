import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {MatButtonModule, MatInputModule, MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmpComponent } from './emp/emp.component';
import { EmployeeCountComponent } from './employee/employee-count.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { ChangeCaseDirective } from './change-case.directive';
import { DemoDirective } from './demo.directive';
import { EmployeeTitlePipePipe } from './employee/employeeTitle/employee-title-pipe.pipe';
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmpComponent,
    EmployeeCountComponent,
    ColorDirectiveDirective,
    ChangeCaseDirective,
    DemoDirective,
    EmployeeTitlePipePipe,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
