import { Injectable } from '@angular/core';
import { MomentumStoreState } from './state';
import * as MomentumStoreSelectors from './selectors';
import * as MomentumStoreActions from './actions';
import { select, Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { LoadingState } from 'src/app/core/models/loading-state.model';
import { EmployeeCreateRequest } from 'src/api/models/employee/requests/employee-create-request.model';
import { CommentCreateRequest } from 'src/api/models/comment/requests/comment-create-request.model';

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

  private selectDepartmentsState$ = this.store.pipe(
    select(MomentumStoreSelectors.selectDepartmentsState)
  );

  private selectEmployeesState$ = this.store.pipe(
    select(MomentumStoreSelectors.selectEmployeesState)
  );

  private selectCommentsState$ = this.store.pipe(
    select(MomentumStoreSelectors.selectCommentsState)
  );
  constructor(private store: Store<MomentumStoreState>) {}

  public retrieveStatuses(
    retry?: boolean
  ): Observable<MomentumStoreState['statusesState']> {
    if (retry) {
      this.store.dispatch(MomentumStoreActions.RetrieveStatuses());
    }

    return this.selectStatusesState$.pipe(
      filter((statusesState) => {
        if (statusesState.loadingState === LoadingState.INIT) {
          this.store.dispatch(MomentumStoreActions.RetrieveStatuses());
        }

        return statusesState.loadingState !== LoadingState.INIT;
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
      filter((prioritiesState) => {
        if (prioritiesState.loadingState === LoadingState.INIT) {
          this.store.dispatch(MomentumStoreActions.RetrievePriorities());
        }

        return prioritiesState.loadingState !== LoadingState.INIT;
      })
    );
  }

  public retrieveDepartments(
    retry?: boolean
  ): Observable<MomentumStoreState['departmentsState']> {
    if (retry) {
      this.store.dispatch(MomentumStoreActions.RetrieveDepartments());
    }

    return this.selectDepartmentsState$.pipe(
      filter((departmentsState) => {
        if (departmentsState.loadingState === LoadingState.INIT) {
          this.store.dispatch(MomentumStoreActions.RetrieveDepartments());
        }

        return departmentsState.loadingState !== LoadingState.INIT;
      })
    );
  }

  public retrieveEmployees(
    retry?: boolean
  ): Observable<MomentumStoreState['employeesState']> {
    if (retry) {
      this.store.dispatch(MomentumStoreActions.RetrieveEmployees());
    }

    return this.selectEmployeesState$.pipe(
      filter((departmentsState) => {
        if (departmentsState.loadingState === LoadingState.INIT) {
          this.store.dispatch(MomentumStoreActions.RetrieveEmployees());
        }

        return departmentsState.loadingState !== LoadingState.INIT;
      })
    );
  }

  public registerEmployee(
    employeeCreateRequest: EmployeeCreateRequest,
    retry?: boolean
  ): Observable<MomentumStoreState['employeesState']> {
    if (retry) {
      this.store.dispatch(
        MomentumStoreActions.RegisterEmployee({ employeeCreateRequest })
      );
    }

    return this.selectEmployeesState$.pipe(
      filter((employeesState) => {
        if (employeesState.registerLoadingState === LoadingState.INIT) {
          this.store.dispatch(
            MomentumStoreActions.RegisterEmployee({ employeeCreateRequest })
          );
        }

        return employeesState.registerLoadingState !== LoadingState.INIT;
      })
    );
  }

  public retrieveCommentsForASpecificTask(
    taskId: number,
    retry?: boolean
  ): Observable<MomentumStoreState['commentsState']> {
    if (retry) {
      this.store.dispatch(
        MomentumStoreActions.RetrieveCommentsByTaskId({ taskId })
      );
    }

    return this.selectCommentsState$.pipe(
      filter((commentsState) => {
        if (commentsState.loadingState === LoadingState.INIT) {
          this.store.dispatch(
            MomentumStoreActions.RetrieveCommentsByTaskId({ taskId })
          );
        }

        return commentsState.loadingState !== LoadingState.INIT;
      })
    );
  }

  public createComment(
    taskId: number,
    commentCreateRequest: CommentCreateRequest,
    retry?: boolean
  ): Observable<MomentumStoreState['commentsState']> {
    if (retry) {
      this.store.dispatch(
        MomentumStoreActions.CreateCommentForASpecificTask({
          commentCreateRequest,
          taskId,
        })
      );
    }

    return this.selectCommentsState$.pipe(
      filter((employeesState) => {
        if (employeesState.createLoadingState === LoadingState.INIT) {
          this.store.dispatch(
            MomentumStoreActions.CreateCommentForASpecificTask({
              commentCreateRequest,
              taskId,
            })
          );
        }

        return employeesState.createLoadingState !== LoadingState.INIT;
      })
    );
  }
}
