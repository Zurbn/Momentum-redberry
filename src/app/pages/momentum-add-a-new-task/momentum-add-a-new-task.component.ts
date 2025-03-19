import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, filter, forkJoin, map, take } from 'rxjs';
import { Department } from 'src/api/models/department/responses/department.model';
import { Employee } from 'src/api/models/employee/responses/employee.model';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { Status } from 'src/api/models/status/responses/status.model';
import { TaskCreateRequest } from 'src/api/models/task/requests/task-create-request.model';
import { MomentumAddEmployeeDialogComponent } from 'src/app/core/components/momentum-add-employee-dialog/momentum-add-employee-dialog.component';
import { AddATaskFormData } from 'src/app/core/models/add-a-task-form-data.model';
import { LoadingState } from 'src/app/core/models/loading-state.model';
import { PriorityEnum } from 'src/app/core/models/priority.enum';
import { StatusEnum } from 'src/app/core/models/status.enum';
import { MomentumStoreFacade } from 'src/stores/momentum-store/facade';

@Component({
  selector: 'app-momentum-add-a-new-task',
  templateUrl: './momentum-add-a-new-task.component.html',
  styleUrls: ['./momentum-add-a-new-task.component.scss'],
})
export class MomentumAddANewTaskComponent {
  public addATaskForm: FormGroup;
  formValue: AddATaskFormData;

  public priorities: Priority[];

  public statuses: Status[];

  public departments: Department[];
  public employees: Employee[];

  private errorRetrievingPriorities = false;
  private errorRetrievingStatuses = false;
  private errorRetrievingDepartments = false;
  private errorRetrievingEmployees = false;

  public readonly VALIDATION_RULES = [
    'მინიმუმ 2 სიმბოლო',
    'მაქსიმუმ 256 სიმბოლო',
  ];
  public priorities$ = this.momentumStoreFacade.retrievePriorities().pipe(
    filter((prioritiesState) => {
      if (prioritiesState.loadingState === LoadingState.ERROR) {
        this.errorRetrievingPriorities = true;
      }
      return prioritiesState.loadingState === LoadingState.LOADED;
    }),
    take(1),
    map((statusesState) => statusesState.priorities)
  );

  public statuses$ = this.momentumStoreFacade.retrieveStatuses().pipe(
    filter((statusesState) => {
      if (statusesState.loadingState === LoadingState.ERROR) {
        this.errorRetrievingStatuses = true;
      }
      return statusesState.loadingState === LoadingState.LOADED;
    }),
    take(1),
    map((statusesState) => statusesState.statuses)
  );

  public departments$ = this.momentumStoreFacade.retrieveDepartments().pipe(
    filter((departmentsState) => {
      if (departmentsState.loadingState === LoadingState.ERROR) {
        this.errorRetrievingDepartments = true;
      }
      return departmentsState.loadingState === LoadingState.LOADED;
    }),
    take(1),
    map((departmentsState) => departmentsState.departments)
  );

  public employees$ = this.momentumStoreFacade.retrieveEmployees().pipe(
    filter((departmentsState) => {
      if (departmentsState.loadingState === LoadingState.ERROR) {
        this.errorRetrievingEmployees = true;
      }
      return departmentsState.loadingState === LoadingState.LOADED;
    }),
    map((departmentsState) => departmentsState.employees)
  );

  constructor(
    private fb: FormBuilder,
    private momentumStoreFacade: MomentumStoreFacade,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    this.initializeForm();
  }
  get tomorrow(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.retrieveFormDynamicData();
  }

  private initializeForm() {
    const storedData = localStorage.getItem('addANewTaskData');
    this.formValue = storedData ? JSON.parse(storedData) : null;
    this.addATaskForm = this.fb.group({
      title: [
        this.formValue?.title || '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      description: [
        this.formValue?.description || '',
        [Validators.minLength(3), Validators.maxLength(255)],
      ],
      priority: [this.formValue?.priority || 1, [Validators.required]],
      status: [this.formValue?.status || 1, Validators.required],
      department: [this.formValue?.department, Validators.required],
      assignedTo: [this.formValue?.assignedTo, Validators.required],
      dueDate: [this.formValue?.dueDate || this.tomorrow, Validators.required],
    });

    this.addATaskForm.valueChanges.subscribe((formValue) => {
      this.formValue = formValue;
      localStorage.setItem('addANewTaskData', JSON.stringify(formValue));
    });
  }

  private retrieveFormDynamicData(): void {
    combineLatest([
      this.priorities$,
      this.statuses$,
      this.departments$,
      this.employees$,
    ]).subscribe(([priorities, statuses, departments, employees]) => {
      this.priorities = priorities;
      this.statuses = statuses;
      this.departments = departments;
      this.employees = employees;
      this.cdr.detectChanges()
      console.log(employees);
    });
  }

  public handleSubmit(): void {
    console.log(this.formValue);
    const taskCreateRequest: TaskCreateRequest = {
      name: this.formValue?.title,
      description: this.formValue.description,
      due_date: this.formValue.dueDate,
      employee_id: this.formValue.assignedTo,
      priority_id: this.formValue.priority,
      status_id: this.formValue.status,
    };
    this.momentumStoreFacade
      .createTask(taskCreateRequest)
      .pipe(
        filter(
          (taskState) => taskState.createLoadingState !== LoadingState.LOADING
        )
      )
      .subscribe((registrationResponse) => {
        console.log(registrationResponse);
        localStorage.setItem('addANewTaskData', null);
      });
  }

  addEmployee() {
    this.dialog.open(MomentumAddEmployeeDialogComponent, {
      panelClass: 'ha-mat-dialog-panel',
      maxWidth: '100%',
      width: '913px',
      height: '800px',
    });
  }
}
