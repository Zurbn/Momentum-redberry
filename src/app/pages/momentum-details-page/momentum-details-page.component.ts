import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, take, map, combineLatest, catchError, EMPTY } from 'rxjs';
import { Status } from 'src/api/models/status/responses/status.model';
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
  public task: TaskWithComments;
  public statuses: Status[];
  public mainCommentContent: string;
  public subCommentContent: string;
  public replyingOn: number;
  public readonly priorityColors = ['#08A508', '#FFBE0B', '#FA4D4D'];
  public readonly departmentColors = [
    '#08A508',
    '#FFBE0B',
    '#FA4D4D',
    '#FD9A6A',
    '#89B6FF',
    '#FFD86D',
    '#FF66A8',
  ];
  constructor(
    private momentumStoreFacade: MomentumStoreFacade,
    private activatedRoute: ActivatedRoute
  ) {}

  private get taskId() {
    return this.activatedRoute?.snapshot?.params?.['id'];
  }

  ngOnInit(): void {
    this.retrieveTaskAndStatus();
  }

  private retrieveTaskAndStatus(): void {
    const task$ = this.momentumStoreFacade.retrieveTaskById(this.taskId).pipe(
      filter((taskState) => {
        const isLoaded =
          taskState.loadingState === LoadingState.LOADED ||
          taskState.singleCardLoadingState === LoadingState.LOADED;
        const selectedTask =
          taskState?.selectedTask ||
          taskState?.tasks?.find((task) => task?.id == this.taskId);
        if (selectedTask?.id != this.taskId) {
          this.momentumStoreFacade.retrieveTaskById(this.taskId);
          return false;
        }
        return isLoaded;
      }),
      map((taskState) => {
        console.log(
          'aaaaaaaa',
          taskState?.selectedTask ||
            taskState?.tasks?.find((task) => task?.id == this.taskId)
        );
        return (
          taskState?.selectedTask ||
          taskState?.tasks?.find((task) => task?.id == this.taskId)
        );
      })
    );
    const status$ = this.momentumStoreFacade.retrieveStatuses().pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return EMPTY; // Prevent further errors from propagating
      }),
      filter((departmentsState) => {
        if (departmentsState.loadingState === LoadingState.ERROR) {
        }
        return departmentsState.loadingState === LoadingState.LOADED;
      }),
      take(1),
      map((departmentsState) => departmentsState.statuses)
    );

    combineLatest([task$, status$]).subscribe(([task, status]) => {
      console.log(task, status);
      this.task = task;
      this.statuses = status;
    });
  }

  public changeStatus(id: number) {
    this.momentumStoreFacade
      .updateTask(this.taskId, { status_id: id })
      .subscribe();
  }

  public submitComment() {
    this.momentumStoreFacade
      .createComment(this.taskId, {
        parent_id: null,
        text: this.mainCommentContent,
      })
      .subscribe((commentSubmitResponse) => {
        this.mainCommentContent = '';
      });
  }

  public submitSubComment(parentId: number) {
    this.momentumStoreFacade
      .createComment(this.taskId, {
        parent_id: parentId,
        text: this.subCommentContent,
      })
      .pipe(take(1))
      .subscribe((commentSubmitResponse) => {
        this.replyingOn = null;
        this.subCommentContent = '';
      });
  }
}
