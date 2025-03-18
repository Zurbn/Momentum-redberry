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
}
