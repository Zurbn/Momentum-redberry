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

  ngOnInit(): void {
    ///////////////// Status /////////////////////
    const base64Avatar =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZT4KPHBhdGggZD0iTTEyIDExMEwxMCAwTTEwIDIyTDggMEwzIDg4TDkgOCIgLz4KPC9zdmc+Cg=='; // Your base64 string

    const employeeCreateRequest = {
      name: 'ნიკა',
      surname: 'ნოკია',
      avatar: base64Avatar,
      department_id: 1,
    };

    this.statusControllerService
      .fetchAllStatuses()
      .subscribe((x) => console.log('status', x));

    this.priorityControllerService
      .fetchAllPriorities()
      .subscribe((x) => console.log('prios', x));

    this.employeeControllerService
      .fetchAllEmployees()
      .subscribe((x) => console.log('employees', x));

    this.departmentControllerService
      .fetchAllDepartments()
      .subscribe((x) => console.log('departments', x));
    this.commentControllerService
      .fetchAllComments(1122)
      .subscribe((x) => console.log('comments', x));

    //////// POST //////
    this.employeeControllerService
      .addNewEmployee(employeeCreateRequest)
      .subscribe((x) => console.log('new emp', x));

    const newComment = {
      text: 'პრიორიტეტი მიენიჭება ვანილა ჯს-ით დაწერას?',
      parent_id: null,
    };

    this.commentControllerService
      .createNewComment(newComment, 1122)
      .subscribe((x) => console.log('new comment', x));
  }
}
