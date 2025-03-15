import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from '../models/priority.enum';

@Pipe({
  name: 'getPriorityColor',
  standalone: true,
})
export class GetPriorityColorPipe implements PipeTransform {
  transform(priority: Priority): { color: string; icon: string } {
    switch (priority) {
      case Priority.HIGH:
        return { color: '#FA4D4D', icon: '/assets/icons/high-icon.svg' };
      case Priority.MIDDLE:
        return { color: '#FFBE0B', icon: '/assets/icons/middle-icon.svg' };
      case Priority.LOW:
        return { color: '#08A508', icon: '/assets/icons/low-icon.svg' };
      default:
        return { color: 'yellow', icon: '/assets/icons/low-icon.svg' };
    }
  }
}
