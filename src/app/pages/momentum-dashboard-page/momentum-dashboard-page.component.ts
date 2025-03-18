import { Component } from '@angular/core';
import { TaskCreateRequest } from 'src/api/models/task/requests/task-create-request.model';
import { TaskControllerService } from 'src/api/services/tasks/task-controller.service';
import { StatusControllerService } from 'src/api/services/statuses/status-controller.service';
import { PriorityControllerService } from 'src/api/services/priorities/priority-controller.service';
import { EmployeeControllerService } from 'src/api/services/employees/employee-controller.service';
import { DepartmentControllerService } from 'src/api/services/departments/department-controller.service';
import { CommentControllerService } from 'src/api/services/comments/comment-controller.service';

@Component({
  selector: 'app-momentum-dashboard-page',
  templateUrl: './momentum-dashboard-page.component.html',
  styleUrls: ['./momentum-dashboard-page.component.scss'],
})
export class MomentumDashboardPageComponent {
  constructor(
    private taskControllerService: TaskControllerService,
    private statusControllerService: StatusControllerService,
    private priorityControllerService: PriorityControllerService,
    private employeeControllerService: EmployeeControllerService,
    private departmentControllerService: DepartmentControllerService,
    private commentControllerService: CommentControllerService
  ) {}

  ngOnInit(): void {}
}
