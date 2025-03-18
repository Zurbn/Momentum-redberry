import { Component } from '@angular/core';
import { TaskCreateRequest } from 'src/api/models/task/requests/task-create-request.model';
import { TaskControllerService } from 'src/api/services/tasks/task-controller.service';
import { StatusControllerService } from 'src/api/services/statuses/status-controller.service';

@Component({
  selector: 'app-momentum-dashboard-page',
  templateUrl: './momentum-dashboard-page.component.html',
  styleUrls: ['./momentum-dashboard-page.component.scss'],
})
export class MomentumDashboardPageComponent {
  constructor(
    private taskControllerService: TaskControllerService,
    private statusControllerService: StatusControllerService
  ) {}

  ngOnInit(): void {
    // this.taskControllerService
    //   .fetchAllTasks()
    //   .subscribe((x) => console.log('fetch all', x));
    // this.taskControllerService
    //   .fetchSingleTask(1125)
    //   .subscribe((x) => console.log('Fetch single task', x));
    // const taskCreateRequest: TaskCreateRequest = {
    //   ///////////////// task ////////////////
    //   name: 'nika',
    //   description: 'testing',
    //   due_date: '2025-12-11',
    //   status_id: 2,
    //   employee_id: 1,
    //   priority_id: 2,
    // };
    // this.taskControllerService
    //   .createTask(taskCreateRequest)
    //   .subscribe((x) => console.log('Create task', x));
    // const taskUpdateRequest = {
    //   status_id: 3,
    // };
    // this.taskControllerService
    //   .updateTaskStatus(1125, taskUpdateRequest)
    //   .subscribe((x) => console.log('update task', x));
    ///////////////// Status /////////////////////
    //   const statuses = this.statusControllerService
    //     .fetchAllStatuses()
    //     .subscribe((x) => console.log('status', x));
    // }
  }
}
