import { LoadingState } from 'src/app/core/models/loading-state.model';
import { Status } from 'src/api/models/status/responses/status.model';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { Department } from 'src/api/models/department/responses/department.model';
import { Employee } from 'src/api/models/employee/responses/employee.model';

export const MOMENTUM_STORE_KEY = 'momentum';

export interface MomentumStoreState {
  statusesState: {
    loadingState: LoadingState;
    statuses: Status[];
  };

  prioritiesState: {
    loadingState: LoadingState;
    priorities: Priority[];
  };

  departmentsState: {
    loadingState: LoadingState;
    departments: Department[];
  };

  employeesState: {
    loadingState: LoadingState;
    registerLoadingState: LoadingState;
    employees: Employee[];
  };
}

export const initialMomentumState: MomentumStoreState = {
  statusesState: {
    loadingState: LoadingState.INIT,
    statuses: null,
  },

  prioritiesState: {
    loadingState: LoadingState.INIT,
    priorities: null,
  },

  departmentsState: {
    loadingState: LoadingState.INIT,
    departments: null,
  },
  employeesState: {
    loadingState: LoadingState.INIT,
    registerLoadingState: LoadingState.INIT,
    employees: null,
  },
};
