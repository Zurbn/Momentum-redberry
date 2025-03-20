import { Component, Input } from '@angular/core';
import { Status } from 'src/api/models/status/responses/status.model';
import { Task } from 'src/api/models/task/responses/task.model';

@Component({
  selector: 'app-momentum-task-column',
  templateUrl: './momentum-task-column.component.html',
  styleUrls: ['./momentum-task-column.component.scss'],
})
export class MomentumTaskColumnComponent {
  @Input() status: Status;
  @Input() tasks: Task[];

  public readonly columnColorMapping = [
    '#F7BC30',
    '#FB5607',
    '#FB5607',
    '#3A86FF',
  ];
}
