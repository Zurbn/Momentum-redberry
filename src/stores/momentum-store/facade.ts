import { Injectable } from '@angular/core';
import { MomentumStoreState } from './state';
import * as MomentumStoreSelectors from './selectors';
import * as MomentumStoreActions from './actions';
import { select, Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { LoadingState } from 'src/app/core/models/loading-state.model';

@Injectable({
  providedIn: 'root',
})
export class MomentumStoreFacade {
  private selectStatusesState$ = this.store.pipe(
    select(MomentumStoreSelectors.selectStatusesState)
  );

  private selectPrioritiesState$ = this.store.pipe(
    select(MomentumStoreSelectors.selectPrioritiesState)
  );

  constructor(private store: Store<MomentumStoreState>) {}

  public retrieveStatuses(
    retry?: boolean
  ): Observable<MomentumStoreState['statusesState']> {
    if (retry) {
      this.store.dispatch(MomentumStoreActions.RetrieveStatuses());
    }

    return this.selectStatusesState$.pipe(
      filter((selectStatusesState) => {
        if (selectStatusesState.loadingState === LoadingState.INIT) {
          this.store.dispatch(MomentumStoreActions.RetrieveStatuses());
        }

        return selectStatusesState.loadingState !== LoadingState.INIT;
      })
    );
  }

  public retrievePriorities(
    retry?: boolean
  ): Observable<MomentumStoreState['prioritiesState']> {
    if (retry) {
      this.store.dispatch(MomentumStoreActions.RetrievePriorities());
    }

    return this.selectPrioritiesState$.pipe(
      filter((selectPrioritiesState) => {
        if (selectPrioritiesState.loadingState === LoadingState.INIT) {
          this.store.dispatch(MomentumStoreActions.RetrievePriorities());
        }

        return selectPrioritiesState.loadingState !== LoadingState.INIT;
      })
    );
  }
}
