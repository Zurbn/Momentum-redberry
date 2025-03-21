import { Pipe, PipeTransform } from '@angular/core';
import { DepartmentTag } from '../models/department.enum';

@Pipe({
  name: 'getDepartmentColor',
  standalone: true,
})
export class GetDepartmentColorPipe implements PipeTransform {
  transform(department: string): string {
    switch (department) {
      case 'ადამიანური რესურსების დეპარტამენტი':
        return '#ff66a8';
      case 'ლოჯოსტიკის დეპარტამენტი':
        return '#89b6ff';
      case 'ტექნოლოგიების დეპარტამენტი.':
        return '#ffd86d';
      case 'გაყიდვები და მარკეტინგის დეპარტამენტი':
        return '#fd9a6a';
      default:
        return 'red';
    }
  }
}
