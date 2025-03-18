import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as MomentumStoreActions from './actions';
import { switchMap, forkJoin, of, map, catchError } from 'rxjs';
import { StatusControllerService } from 'src/api/services/statuses/status-controller.service';

@Injectable()
export class MomentumStoreEffects {
  constructor(
    private actions$: Actions,
    private statusControllerService: StatusControllerService
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
}
