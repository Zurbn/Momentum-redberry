import { Component, Input } from '@angular/core';
import {
  TaskWithComments,
} from 'src/api/models/task/responses/task.model';

@Component({
  selector: 'app-momentum-task-card',
  templateUrl: './momentum-task-card.component.html',
  styleUrls: ['./momentum-task-card.component.scss'],
})
export class MomentumTaskCardComponent {
  @Input() task: TaskWithComments;
  @Input() color: string;

  public readonly priorityColors = ['#08A508', '#FFBE0B', '#FA4D4D'];
  public readonly departmentColors = [
    '#08A508',
    '#FFBE0B',
    '#FA4D4D',
    '#FD9A6A',
    '#89B6FF',
    '#FFD86D',
    '#FF66A8',
  ];
}
