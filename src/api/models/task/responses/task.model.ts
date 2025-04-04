import { Status } from '../../status/responses/status.model';
import { Priority } from '../../priority/responses/priority.model';
import { Department } from '../../department/responses/department.model';
import { Employee } from '../../employee/responses/employee.model';
import { Comment } from '../../comment/responses/comment.model';

export interface Task {
  id: number;
  name: string;
  description: string;
  due_date: string;
  status: Status;
  priority: Priority;
  department: Department;
  employee: Employee;
}

export interface TaskWithComments extends Task {
  comments?: Comment[];
}
