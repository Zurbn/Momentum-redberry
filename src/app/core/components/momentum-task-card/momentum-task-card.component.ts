import { Component, Input } from '@angular/core';
import { MomentumTaskCardModel } from '../../models/momentum-task-card.model';
import { CommonModule } from '@angular/common';
import { GetDepartmentColorPipe } from '../../pipes/get-department-color.pipe';
import { GetPriorityColorPipe } from '../../pipes/get-priority-color.pipe';

@Component({
  selector: 'app-momentum-task-card',
  templateUrl: './momentum-task-card.component.html',
  styleUrls: ['./momentum-task-card.component.scss'],
  standalone: true,
  imports: [CommonModule, GetDepartmentColorPipe, GetPriorityColorPipe],
})
export class MomentumTaskCardComponent {
  @Input() momentumTaskCardData: MomentumTaskCardModel;
}
