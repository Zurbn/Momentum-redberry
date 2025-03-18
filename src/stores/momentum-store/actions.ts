import { createAction, props } from '@ngrx/store';
import { Department } from 'src/api/models/department/responses/department.model';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { Status } from 'src/api/models/status/responses/status.model';

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
