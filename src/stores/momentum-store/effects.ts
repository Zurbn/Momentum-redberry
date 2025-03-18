import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as MomentumStoreActions from './actions';
import { switchMap, forkJoin, of, map, catchError } from 'rxjs';
import { StatusControllerService } from 'src/api/services/statuses/status-controller.service';
import { PriorityControllerService } from 'src/api/services/priorities/priority-controller.service';

@Injectable()
export class MomentumStoreEffects {
  constructor(
    private actions$: Actions,
    private statusControllerService: StatusControllerService,
    private priorityControllerService: PriorityControllerService
  ) {}

  fetchStatuses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MomentumStoreActions.RetrieveStatuses),
      switchMap(() => {
        return this.statusControllerService.fetchAllStatuses().pipe(
          map((statuses) => {
            return MomentumStoreActions.StatusesRetrieved({
              statuses,
            });
          }),
          catchError((error) =>
            of(MomentumStoreActions.ErrorRetrievingStatuses())
          )
        );
      })
    )
  );

  fetchPriority$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MomentumStoreActions.RetrievePriorities),
      switchMap(() => {
        return this.priorityControllerService.fetchAllPriorities().pipe(
          map((priorities) => {
            return MomentumStoreActions.PrioritiesRetrieved({
              priorities,
            });
          }),
          catchError((error) =>
            of(MomentumStoreActions.ErrorRetrievingPriorities())
          )
        );
      })
    )
  );
}
