import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MOMENTUM_STORE_KEY, MomentumStoreState } from './state';

export const selectMomentumFeature =
  createFeatureSelector<MomentumStoreState>(MOMENTUM_STORE_KEY);

export const selectStatusesState = createSelector(
  selectMomentumFeature,
  (state: MomentumStoreState) => state.statusesState
);

export const selectPrioritiesState = createSelector(
  selectMomentumFeature,
  (state: MomentumStoreState) => state.prioritiesState
);

export const selectDepartmentsState = createSelector(
  selectMomentumFeature,
  (state: MomentumStoreState) => state.departmentsState
);

export const selectEmployeesState = createSelector(
  selectMomentumFeature,
  (state: MomentumStoreState) => state.employeesState
);

export const selectCommentsState = createSelector(
  selectMomentumFeature,
  (state: MomentumStoreState) => state.commentsState
);

export const selectTasksState = createSelector(
  selectMomentumFeature,
  (state: MomentumStoreState) => state.tasksState
);
