import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as MomentumStoreActions from './actions';
import { switchMap, forkJoin, of, map, catchError } from 'rxjs';
import { StatusControllerService } from 'src/api/services/statuses/status-controller.service';
import { PriorityControllerService } from 'src/api/services/priorities/priority-controller.service';
import { DepartmentControllerService } from 'src/api/services/departments/department-controller.service';
import { EmployeeControllerService } from 'src/api/services/employees/employee-controller.service';
import { CommentControllerService } from 'src/api/services/comments/comment-controller.service';

@Injectable()
export class MomentumStoreEffects {
  constructor(
    private actions$: Actions,
    private statusControllerService: StatusControllerService,
    private priorityControllerService: PriorityControllerService,
    private departmentControllerService: DepartmentControllerService,
    private employeeControllerService: EmployeeControllerService,
    private commentControllerService: CommentControllerService
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

  fetchPriorities$ = createEffect(() =>
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

  fetchDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MomentumStoreActions.RetrieveDepartments),
      switchMap(() => {
        return this.departmentControllerService.fetchAllDepartments().pipe(
          map((departments) => {
            return MomentumStoreActions.DepartmentsRetrieved({
              departments,
            });
          }),
          catchError((error) =>
            of(MomentumStoreActions.ErrorRetrievingDepartments())
          )
        );
      })
    )
  );

  fetchEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MomentumStoreActions.RetrieveEmployees),
      switchMap(() => {
        return this.employeeControllerService.fetchAllEmployees().pipe(
          map((employees) => {
            return MomentumStoreActions.EmployeesRetrieved({
              employees,
            });
          }),
          catchError((error) =>
            of(MomentumStoreActions.ErrorRetrievingEmployees())
          )
        );
      })
    )
  );

  registerEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MomentumStoreActions.RegisterEmployee),
      switchMap(({ employeeCreateRequest }) => {
        return this.employeeControllerService
          .addNewEmployee(employeeCreateRequest)
          .pipe(
            map((employee) => {
              return MomentumStoreActions.EmployeeRegistered({
                employee,
              });
            }),
            catchError((error) =>
              of(MomentumStoreActions.ErrorRegisteringEmployee())
            )
          );
      })
    )
  );

  fetchComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MomentumStoreActions.RetrieveCommentsByTaskId),
      switchMap(({ taskId }) => {
        return this.commentControllerService.fetchAllComments(taskId).pipe(
          map((comments) => {
            return MomentumStoreActions.CommentsRetrieved({
              comments,
            });
          }),
          catchError((error) =>
            of(MomentumStoreActions.ErrorRetrievingComments())
          )
        );
      })
    )
  );

  createComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MomentumStoreActions.CreateCommentForASpecificTask),
      switchMap(({ commentCreateRequest, taskId }) => {
        return this.commentControllerService
          .createNewComment(commentCreateRequest, taskId)
          .pipe(
            map((comment) => {
              return MomentumStoreActions.CommentCreated({
                comment,
              });
            }),
            catchError((error) =>
              of(MomentumStoreActions.ErrorCreatingComment())
            )
          );
      })
    )
  );
}
