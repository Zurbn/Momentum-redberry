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
        loadingState: LoadingState.LOADING,
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
        loadingState: LoadingState.LOADING,
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
  }),

  //! Employees

  on(MomentumStoreActions.RetrieveEmployees, (state) => {
    return {
      ...state,
      employeesState: {
        ...state.employeesState,
        loadingState: LoadingState.LOADING,
        employees: null,
      },
    };
  }),
  on(MomentumStoreActions.EmployeesRetrieved, (state, { employees }) => {
    return {
      ...state,
      employeesState: {
        ...state.employeesState,
        loadingState: LoadingState.LOADED,
        employees,
      },
    };
  }),
  on(MomentumStoreActions.ErrorRetrievingEmployees, (state) => {
    return {
      ...state,
      employeesState: {
        ...state.employeesState,
        loadingState: LoadingState.ERROR,
        employees: null,
      },
    };
  }),

  on(
    MomentumStoreActions.RegisterEmployee,
    (state, { employeeCreateRequest }) => {
      return {
        ...state,
        employeesState: {
          ...state.employeesState,
          registerLoadingState: LoadingState.LOADING,
          departmentDuringRegistration: state.departmentsState.departments.find(
            (department) =>
              department?.id === employeeCreateRequest?.department_id
          ),
        },
      };
    }
  ),
  on(MomentumStoreActions.EmployeeRegistered, (state, { employee }) => {
    return {
      ...state,
      employeesState: {
        ...state.employeesState,
        registerLoadingState: LoadingState.LOADING,
        employees: [
          ...(state?.employeesState?.employees || []),
          {
            ...employee,
            department: state.employeesState.departmentDuringRegistration,
          },
        ],
      },
    };
  }),
  on(MomentumStoreActions.ErrorRegisteringEmployee, (state) => {
    return {
      ...state,
      employeesState: {
        ...state.employeesState,
        registerLoadingState: LoadingState.ERROR,
      },
    };
  }),

  //! Comments

  on(MomentumStoreActions.RetrieveCommentsByTaskId, (state) => {
    return {
      ...state,
      commentsState: {
        ...state.commentsState,
        loadingState: LoadingState.LOADING,
        comments: null,
      },
    };
  }),
  on(MomentumStoreActions.CommentsRetrieved, (state, { comments }) => {
    return {
      ...state,
      commentsState: {
        ...state.commentsState,
        loadingState: LoadingState.LOADED,
        comments,
      },
    };
  }),
  on(MomentumStoreActions.ErrorRetrievingComments, (state) => {
    return {
      ...state,
      commentsState: {
        ...state.commentsState,
        loadingState: LoadingState.ERROR,
        comments: null,
      },
    };
  }),

  on(MomentumStoreActions.CreateCommentForASpecificTask, (state) => {
    return {
      ...state,
      commentsState: {
        ...state.commentsState,
        createLoadingState: LoadingState.LOADING,
      },
    };
  }),
  on(MomentumStoreActions.CommentCreated, (state, { comment }) => {
    return {
      ...state,
      commentsState: {
        ...state.commentsState,
        createLoadingState: LoadingState.LOADING,
        comments: [...(state?.commentsState?.comments || []), comment],
      },
    };
  }),
  on(MomentumStoreActions.ErrorCreatingComment, (state) => {
    return {
      ...state,
      commentsState: {
        ...state.commentsState,
        createLoadingState: LoadingState.ERROR,
      },
    };
  }),

  //! Tasks

  on(MomentumStoreActions.RetrieveTasks, (state) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        loadingState: LoadingState.LOADING,
        tasks: null,
      },
    };
  }),
  on(MomentumStoreActions.TasksRetrieved, (state, { tasks }) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        loadingState: LoadingState.LOADED,
        tasks,
      },
    };
  }),
  on(MomentumStoreActions.ErrorRetrievingTasks, (state) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        loadingState: LoadingState.ERROR,
        tasks: null,
      },
    };
  }),

  on(MomentumStoreActions.RetrieveTaskById, (state) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        singleCardLoadingState: LoadingState.LOADING,
        selectedTask: null,
      },
    };
  }),
  on(MomentumStoreActions.TaskByIdRetrieved, (state, { selectedTask }) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        singleCardLoadingState: LoadingState.LOADED,
        selectedTask,
      },
    };
  }),
  on(MomentumStoreActions.ErrorRetrievingTaskById, (state) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        singleCardLoadingState: LoadingState.ERROR,
        selectedTask: null,
      },
    };
  }),

  on(MomentumStoreActions.CreateTask, (state) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        createLoadingState: LoadingState.LOADING,
      },
    };
  }),
  on(MomentumStoreActions.TaskCreated, (state, { task }) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        createLoadingState: LoadingState.LOADED,
        tasks: [...(state?.tasksState?.tasks || []), task],
      },
    };
  }),
  on(MomentumStoreActions.ErrorCreatingTask, (state) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        createLoadingState: LoadingState.ERROR,
      },
    };
  }),

  on(MomentumStoreActions.UpdateTask, (state) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        updateLoadingState: LoadingState.LOADING,
      },
    };
  }),
  on(MomentumStoreActions.TaskUpdated, (state, { task }) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        updateLoadingState: LoadingState.LOADED,
        tasks: state.tasksState.tasks.map((t) =>
          t.id === task.id ? { ...t, ...task } : t
        ),
      },
    };
  }),

  on(MomentumStoreActions.ErrorUpdatingTask, (state) => {
    return {
      ...state,
      tasksState: {
        ...state.tasksState,
        updateLoadingState: LoadingState.ERROR,
      },
    };
  })
);
