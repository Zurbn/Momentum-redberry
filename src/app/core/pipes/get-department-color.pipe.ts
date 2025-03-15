import { Pipe, PipeTransform } from '@angular/core';
import { DepartmentTag } from '../models/department.enum';

@Pipe({
  name: 'getDepartmentColor',
  standalone: true,
})
export class GetDepartmentColorPipe implements PipeTransform {
  transform(department: DepartmentTag): string {
    switch (department) {
      case DepartmentTag.DESIGN:
        return '#ff66a8';
      case DepartmentTag.LOGISTIC:
        return '#89b6ff';
      case DepartmentTag.ITTECH:
        return '#ffd86d';
      case DepartmentTag.MARKETING:
        return '#fd9a6a';
      default:
        return 'red';
    }
  }
}
