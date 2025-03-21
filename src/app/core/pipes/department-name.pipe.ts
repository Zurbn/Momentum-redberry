import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentPipe',
  standalone: true,
})
export class DepartmentPipe implements PipeTransform {
  transform(dep: string): string {
    switch (dep) {
      case 'ადამიანური რესურსების დეპარტამენტი':
        return 'ად. რეს.';
      case 'ადმინისტრაციის დეპარტამენტი':
        return 'ადმ. დეპ.';
      case 'ფინანსების დეპარტამენტი':
        return 'ფინანსები';
      case 'გაყიდვები და მარკეტინგის დეპარტამენტი':
        return 'მაერკეტინგი';
      case 'ლოჯოსტიკის დეპარტამენტი':
        return 'ლოჯისტიკა';
      case 'მედიის დეპარტამენტი':
        return 'მედია';
      case 'ტექნოლოგიების დეპარტამენტი':
        return 'ინფ. ტექ.';
      default:
        return '';
    }
  }
}
