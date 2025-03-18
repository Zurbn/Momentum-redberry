import { createAction, props } from '@ngrx/store';
import { CommentCreateRequest } from 'src/api/models/comment/requests/comment-create-request.model';
import { Department } from 'src/api/models/department/responses/department.model';
import { EmployeeCreateRequest } from 'src/api/models/employee/requests/employee-create-request.model';
import { Employee } from 'src/api/models/employee/responses/employee.model';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { Status } from 'src/api/models/status/responses/status.model';
import { TaskCreateRequest } from 'src/api/models/task/requests/task-create-request.model';
import { TaskUpdateRequest } from 'src/api/models/task/requests/task-update-request.model';
import { Task } from 'src/api/models/task/responses/task.model';

//! Statuses

export const RetrieveStatuses = createAction(
  '[Momentum] Retrieve all available Statuses'
);

export const StatusesRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Statuses',
  props<{ statuses: Status[] }>()
);

export const ErrorRetrievingStatuses = createAction(
  '[Momentum] Error retrieving all available Statuses'
);

//! Priorities

export const RetrievePriorities = createAction(
  '[Momentum] Retrieve all available Priorities'
);

export const PrioritiesRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Priorities',
  props<{ priorities: Priority[] }>()
);

export const ErrorRetrievingPriorities = createAction(
  '[Momentum] Error retrieving all available Priorities'
);

//! Departments

export const RetrieveDepartments = createAction(
  '[Momentum] Retrieve all available Departments'
);

export const DepartmentsRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Departments',
  props<{ departments: Department[] }>()
);

export const ErrorRetrievingDepartments = createAction(
  '[Momentum] Error retrieving all available Departments'
);

//! Employees

//! Fetch
export const RetrieveEmployees = createAction(
  '[Momentum] Retrieve all available Employees'
);

export const EmployeesRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Employees',
  props<{ employees: Employee[] }>()
);

export const ErrorRetrievingEmployees = createAction(
  '[Momentum] Error retrieving all available Employees'
);

//! Register
export const RegisterEmployee = createAction(
  '[Momentum] Register Employee',
  props<{ employeeCreateRequest: EmployeeCreateRequest }>()
);

export const EmployeeRegistered = createAction(
  '[Momentum] Successfully registered Employees',
  props<{ employee: Employee }>()
);

export const ErrorRegisteringEmployee = createAction(
  '[Momentum] Error registering Employee'
);

//! Comments

//! Fetch
export const RetrieveCommentsByTaskId = createAction(
  '[Momentum] Retrieve all available Comments for a task',
  props<{ taskId: number }>()
);

export const CommentsRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Comments for a task',
  props<{ comments: Comment[] }>()
);

export const ErrorRetrievingComments = createAction(
  '[Momentum] Error retrieving all available Comments for a task'
);

//! Create
export const CreateCommentForASpecificTask = createAction(
  '[Momentum] Create Comment for a task',
  props<{ commentCreateRequest: CommentCreateRequest; taskId: number }>()
);

export const CommentCreated = createAction(
  '[Momentum] Successfully registered Comment for a task',
  props<{ comment: Comment }>()
);

export const ErrorCreatingComment = createAction(
  '[Momentum] Error registering Comment for a task'
);

//! Tasks

//! Fetch ALL
export const RetrieveTasks = createAction(
  '[Momentum] Retrieve all available Tasks'
);

export const TasksRetrieved = createAction(
  '[Momentum] Successfully retrieved all available Tasks',
  props<{ tasks: Task[] }>()
);

export const ErrorRetrievingTasks = createAction(
  '[Momentum] Error retrieving all available Tasks'
);

//! FETCH SINGLE

export const RetrieveTaskById = createAction(
  '[Momentum] Retrieve task by id',
  props<{ taskId: number }>()
);

export const TaskByIdRetrieved = createAction(
  '[Momentum] Successfully retrieved Task By Id',
  props<{ selectedTask: Task }>()
);

export const ErrorRetrievingTaskById = createAction(
  '[Momentum] Error retrieving Task By Id'
);

//! Create
export const CreateTask = createAction(
  '[Momentum] Create Task ',
  props<{ taskCreateRequest: TaskCreateRequest }>()
);

export const TaskCreated = createAction(
  '[Momentum] Successfully created Task',
  props<{ task: Task }>()
);

export const ErrorCreatingTask = createAction('[Momentum] Error creating Task');

//! Update
export const UpdateTask = createAction(
  '[Momentum] Update Task ',
  props<{ taskId: number; taskUpdateRequest: TaskUpdateRequest }>()
);

export const TaskUpdated = createAction(
  '[Momentum] Successfully created Task',
  props<{ task: Task }>()
);

export const ErrorUpdatingTask = createAction('[Momentum] Error creating Task');
