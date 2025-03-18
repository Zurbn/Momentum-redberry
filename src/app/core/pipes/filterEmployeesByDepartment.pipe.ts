import { Pipe, type PipeTransform } from '@angular/core';
import { Employee } from 'src/api/models/employee/responses/employee.model';
import { AddATaskFormData } from '../models/add-a-task-form-data.model';

@Pipe({
  name: 'appFilterEmployeesByDepartment',
  standalone: true,
})
export class FilterEmployeesByDepartmentPipe implements PipeTransform {
  transform(employees: Employee[], formData: AddATaskFormData): Employee[] {
    const departmentValue = formData?.department;
    if (!departmentValue) {
      return employees;
    }
    return employees?.filter((employee) => {
      return employee?.department?.id == departmentValue;
    });
  }
}
