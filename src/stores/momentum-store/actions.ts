import { createAction, props } from '@ngrx/store';
import { Status } from 'src/api/models/status/responses/status.model';

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
