import { LoadingState } from 'src/app/core/models/loading-state.model';
import { Status } from 'src/api/models/status/responses/status.model';

export const MOMENTUM_STORE_KEY = 'momentum';

export interface MomentumStoreState {
  statusesState: {
    loadingState: LoadingState;
    statuses: Status[];
  };
}

export const initialMomentumState: MomentumStoreState = {
  statusesState: {
    loadingState: LoadingState.INIT,
    statuses: null,
  },
};
