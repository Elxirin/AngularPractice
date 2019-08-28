import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from './employee.interface';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: IEmployee[], searchTerm: string): IEmployee[] {
    if (!employees || !searchTerm) {
      return employees;
    }
    return employees.filter(emp => emp.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 );
  }

}
