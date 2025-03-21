import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getPriorityColor',
  standalone: true,
})
export class GetPriorityColorPipe implements PipeTransform {
  transform(priority): { color: string; icon: string } {
    switch (priority) {
      case 'მაღალი':
        return { color: '#FA4D4D', icon: '/assets/icons/high-icon.svg' };
      case 'საშუალო':
        return { color: '#FFBE0B', icon: '/assets/icons/middle-icon.svg' };
      case 'დაბალი':
        return { color: '#08A508', icon: '/assets/icons/low-icon.svg' };
      default:
        return { color: 'yellow', icon: '/assets/icons/low-icon.svg' };
    }
  }
}
