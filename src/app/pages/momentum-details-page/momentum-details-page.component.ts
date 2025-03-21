import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, take, map } from 'rxjs';
import { Department } from 'src/api/models/department/responses/department.model';
import {
  Task,
  TaskWithComments,
} from 'src/api/models/task/responses/task.model';
import { LoadingState } from 'src/app/core/models/loading-state.model';
import { MomentumStoreFacade } from 'src/stores/momentum-store/facade';

@Component({
  selector: 'app-momentum-details-page',
  templateUrl: './momentum-details-page.component.html',
  styleUrls: ['./momentum-details-page.component.scss'],
})
export class MomentumDetailsPageComponent {
  task: TaskWithComments;
  departments: Department[];
  constructor(
    private momentumStoreFacade: MomentumStoreFacade,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.momentumStoreFacade
      .retrieveTaskById(this.taskId)
      .subscribe((tasksState) => {
        console.log(tasksState);
        this.task =
          tasksState?.selectedTask ||
          tasksState?.tasks?.find((task) => task?.id == this.taskId);
        console.log(this.task);
      });

    this.momentumStoreFacade
      .retrieveStatuses()
      .pipe(
        filter((departmentsState) => {
          if (departmentsState.loadingState === LoadingState.ERROR) {
          }
          return departmentsState.loadingState === LoadingState.LOADED;
        }),
        take(1),
        map((departmentsState) => departmentsState.statuses)
      )
      .subscribe((departments) => {
        this.departments = departments;
      });
  }
  private get taskId() {
    return this.activatedRoute.snapshot.params['id'];
  }

  public changeStatus(id) {
    console.log(id);
    this.momentumStoreFacade
      .updateTask(this.taskId, { status_id: id }, true)
      .subscribe();
  }
}
