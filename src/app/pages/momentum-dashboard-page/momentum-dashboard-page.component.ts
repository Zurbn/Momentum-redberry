import { Component } from '@angular/core';
import { MomentumStoreFacade } from 'src/stores/momentum-store/facade';
import { Status } from 'src/api/models/status/responses/status.model';
import { combineLatest, filter, map } from 'rxjs';
import { LoadingState } from 'src/app/core/models/loading-state.model';
import { Task } from 'src/api/models/task/responses/task.model';
import { Department } from 'src/api/models/department/responses/department.model';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { Employee } from 'src/api/models/employee/responses/employee.model';

@Component({
  selector: 'app-momentum-dashboard-page',
  templateUrl: './momentum-dashboard-page.component.html',
  styleUrls: ['./momentum-dashboard-page.component.scss'],
})
export class MomentumDashboardPageComponent {
  public statuses: Status[];
  public priorities: Priority[];
  public tasks: Task[];
  public departments: Department[];
  public employees: Employee[];

  public chosenDepartments = [];
  public chosenPriorities = [];
  public chosenEmployees = [];
  public chosenFilters = [];
  public latestFilters = [];

  constructor(private momentumStoreFacade: MomentumStoreFacade) {}

  ngOnInit(): void {
    this.retrieveStatusesAndTasks();
  }

  private retrieveStatusesAndTasks(): void {
    const statuses$ = this.momentumStoreFacade.retrieveStatuses().pipe(
      filter(
        (statusesState) => statusesState.loadingState !== LoadingState.LOADING
      ),
      map((statusesState) => statusesState.statuses)
    );

    const priorities$ = this.momentumStoreFacade.retrievePriorities().pipe(
      filter(
        (prioritiesState) =>
          prioritiesState.loadingState !== LoadingState.LOADING
      ),
      map((prioritiesState) => prioritiesState.priorities)
    );

    const employees$ = this.momentumStoreFacade.retrieveEmployees().pipe(
      filter(
        (employeesState) => employeesState.loadingState !== LoadingState.LOADING
      ),
      map((employeesState) => employeesState.employees)
    );

    const tasks$ = this.momentumStoreFacade.retrieveTasks().pipe(
      filter((tasksState) => tasksState.loadingState !== LoadingState.LOADING),
      map((tasksState) => tasksState.tasks)
    );

    const departments$ = this.momentumStoreFacade.retrieveDepartments().pipe(
      filter((tasksState) => tasksState.loadingState !== LoadingState.LOADING),
      map((tasksState) => tasksState.departments)
    );

    combineLatest([
      tasks$,
      statuses$,
      priorities$,
      departments$,
      employees$,
    ]).subscribe(([tasks, statuses, priorities, departments, employees]) => {
      this.statuses = statuses;
      this.priorities = priorities;
      this.tasks = tasks;
      this.departments = departments;
      this.employees = employees;
    });
  }

  public chooseFilter(
    filter: any,
    filterType: 'department' | 'employee' | 'priority',
    deletingFilter?: boolean
  ) {
    let chosenArray;

    switch (filterType) {
      case 'department':
        chosenArray = this.chosenDepartments;
        break;
      case 'employee':
        chosenArray = this.chosenEmployees;
        break;
      case 'priority':
        chosenArray = this.chosenPriorities;
        break;
      default:
        throw new Error('Invalid filter type');
    }

    const index = chosenArray.indexOf(
      chosenArray?.find((item) => item?.name == filter?.name)
    );
    console.log(index);
    if (index > -1) {
      chosenArray.splice(index, 1);
      if (deletingFilter) {
        const indexInChosenFilters = this.chosenFilters.indexOf(filter);
        this.chosenFilters.splice(indexInChosenFilters, 1);
      }
    } else {
      chosenArray.push(filter);
    }
  }

  public applyFilters() {
    this.chosenFilters = [
      ...this.chosenDepartments.map((departments) => ({
        ...departments,
        type: 'department',
      })),
      ...this.chosenEmployees.map((employee) => ({
        ...employee,
        type: 'employee',
      })),
      ...this.chosenPriorities.map((priorities) => ({
        ...priorities,
        type: 'priority',
      })),
    ];
    this.latestFilters = this.chosenFilters;
  }

  public clearFilters() {
    this.chosenFilters = [];
    this.chosenDepartments = [];
    this.chosenEmployees = [];
    this.chosenPriorities = [];
  }
}
