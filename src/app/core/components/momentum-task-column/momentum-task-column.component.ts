import { Component } from '@angular/core';
import { MomentumTaskCardModel } from '../../models/momentum-task-card.model';
import { PriorityEnum } from '../../models/priority.enum';
import { DepartmentTag } from '../../models/department.enum';
import { CommonModule } from '@angular/common';
import { MomentumTaskCardComponent } from '../momentum-task-card/momentum-task-card.component';

@Component({
  selector: 'app-momentum-task-column',
  templateUrl: './momentum-task-column.component.html',
  styleUrls: ['./momentum-task-column.component.scss'],
  standalone: true,
  imports: [CommonModule, MomentumTaskCardComponent],
})
export class MomentumTaskColumnComponent {
  categories = [
    { name: 'დასაწყები', color: '#F7BC30' },
    { name: 'პროცესში', color: '#FB5607' },
    { name: 'მზად ტესტირებისთვის', color: '#FB5607' },
    { name: 'დასრულებული', color: '#3A86FF' },
  ];
  tasks: MomentumTaskCardModel[] = [
    {
      priority: PriorityEnum.MIDDLE,
      department: DepartmentTag.DESIGN,
      date: '22 იანვ, 2022',
      title: 'Redberry-ს საიტის ლენდინგის დიზაინი',
      description:
        'შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს, ნავიგაციას.',
      picture: '/assets/icons/task-pic.svg',
      numberOfComments: 8,
    },
    {
      priority: PriorityEnum.MIDDLE,
      department: DepartmentTag.LOGISTIC,
      date: '22 იანვ, 2022',
      title: 'Redberry-ს საიტის ლენდინგის დიზაინი',
      description:
        'შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს, ნავიგაციას.',
      picture: '/assets/icons/task-pic.svg',
      numberOfComments: 8,
    },
    {
      priority: PriorityEnum.LOW,
      department: DepartmentTag.ITTECH,
      date: '22 იანვ, 2022',
      title: 'Redberry-ს საიტის ლენდინგის დიზაინი',
      description:
        'შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს, ნავიგაციას.',
      picture: '/assets/icons/task-pic.svg',
      numberOfComments: 8,
    },
    {
      priority: PriorityEnum.HIGH,
      department: DepartmentTag.MARKETING,
      date: '22 იანვ, 2022',
      title: 'Redberry-ს საიტის ლენდინგის დიზაინი',
      description:
        'შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს, ნავიგაციას.',
      picture: '/assets/icons/task-pic.svg',
      numberOfComments: 8,
    },
  ];
}
