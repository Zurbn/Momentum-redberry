import { createAction, props } from '@ngrx/store';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { Status } from 'src/api/models/status/responses/status.model';

//! Statuses

export const RetrieveStatuses = createAction(
  '[Momentum] Retrieve all available statuses'
);

export const StatusesRetrieved = createAction(
  '[Momentum] Successfully retrieved all available statuses',
  props<{ statuses: Status[] }>()
);

export const ErrorRetrievingStatuses = createAction(
  '[Momentum] Error retrieving all available statuses'
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
  '[Momentum] Error retrieving all available statuses'
);
