import { Pipe, PipeTransform } from '@angular/core';
import { PriorityEnum } from '../models/priority.enum';

@Pipe({
  name: 'getPriorityColor',
  standalone: true,
})
export class GetPriorityColorPipe implements PipeTransform {
  transform(priority: PriorityEnum): { color: string; icon: string } {
    switch (priority) {
      case PriorityEnum.HIGH:
        return { color: '#FA4D4D', icon: '/assets/icons/high-icon.svg' };
      case PriorityEnum.MIDDLE:
        return { color: '#FFBE0B', icon: '/assets/icons/middle-icon.svg' };
      case PriorityEnum.LOW:
        return { color: '#08A508', icon: '/assets/icons/low-icon.svg' };
      default:
        return { color: 'yellow', icon: '/assets/icons/low-icon.svg' };
    }
  }
}
