import { createReducer, on } from '@ngrx/store';
import { initialMomentumState } from './state';
import * as MomentumStoreActions from './actions';
import { LoadingState } from 'src/app/core/models/loading-state.model';

export const MomentumStoreReducer = createReducer(
  initialMomentumState,
  //! Statuses
  on(MomentumStoreActions.RetrieveStatuses, (state) => {
    return {
      ...state,
      statusesState: {
        loadingState: LoadingState.LOADING,
        statuses: null,
      },
    };
  }),
  on(MomentumStoreActions.StatusesRetrieved, (state, { statuses }) => {
    return {
      ...state,
      statusesState: {
        loadingState: LoadingState.LOADED,
        statuses,
      },
    };
  }),
  on(MomentumStoreActions.ErrorRetrievingStatuses, (state) => {
    return {
      ...state,
      statusesState: {
        loadingState: LoadingState.ERROR,
        statuses: null,
      },
    };
  }),

  //! Priorities

  on(MomentumStoreActions.RetrievePriorities, (state) => {
    return {
      ...state,
      prioritiesState: {
        loadingState: LoadingState.INIT,
        priorities: null,
      },
    };
  }),
  on(MomentumStoreActions.PrioritiesRetrieved, (state, { priorities }) => {
    return {
      ...state,
      prioritiesState: {
        loadingState: LoadingState.LOADED,
        priorities,
      },
    };
  }),
  on(MomentumStoreActions.ErrorRetrievingPriorities, (state) => {
    return {
      ...state,
      prioritiesState: {
        loadingState: LoadingState.ERROR,
        priorities: null,
      },
    };
  }),

  //! Departments

  on(MomentumStoreActions.RetrieveDepartments, (state) => {
    return {
      ...state,
      departmentsState: {
        loadingState: LoadingState.INIT,
        departments: null,
      },
    };
  }),
  on(MomentumStoreActions.DepartmentsRetrieved, (state, { departments }) => {
    return {
      ...state,
      departmentsState: {
        loadingState: LoadingState.LOADED,
        departments,
      },
    };
  }),
  on(MomentumStoreActions.ErrorRetrievingDepartments, (state) => {
    return {
      ...state,
      departmentsState: {
        loadingState: LoadingState.ERROR,
        departments: null,
      },
    };
  })
);
