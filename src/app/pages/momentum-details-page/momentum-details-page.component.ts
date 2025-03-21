import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, take, map, combineLatest, Subject, takeUntil } from 'rxjs';
import { Status } from 'src/api/models/status/responses/status.model';
import {
  Task,
  TaskWithComments,
} from 'src/api/models/task/responses/task.model';
import { LoadingState } from 'src/app/core/models/loading-state.model';
import { LoadingService } from 'src/app/core/services/loading.service';
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
  public taskId: number;

  private unsubscribe$ = new Subject<void>();
  constructor(
    private momentumStoreFacade: MomentumStoreFacade,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.showLoadingDialog();
    this.retrieveTaskAndStatus();
  }

  private retrieveTaskAndStatus(): void {
    this.taskId = +this.activatedRoute?.snapshot?.params?.['id'];
    const task$ = this.momentumStoreFacade.retrieveTaskById(this.taskId).pipe(
      filter((taskState) => {
        const isLoaded =
          taskState.loadingState === LoadingState.LOADED ||
          taskState.singleCardLoadingState === LoadingState.LOADED;

        const selectedTask =
          taskState?.selectedTask ||
          taskState?.tasks?.find((task) => task?.id == this.taskId);

        if (isLoaded && selectedTask?.id != this.taskId) {
          this.momentumStoreFacade.retrieveTaskById(this.taskId, true);
          return false;
        }
        return isLoaded;
      }),
      takeUntil(this.unsubscribe$),
      map((taskState) => {
        return (
          taskState?.selectedTask ||
          taskState?.tasks?.find((task) => task?.id == this.taskId)
        );
      })
    );
    const status$ = this.momentumStoreFacade.retrieveStatuses().pipe(
      filter((departmentsState) => {
        if (departmentsState.loadingState === LoadingState.ERROR) {
        }
        return departmentsState.loadingState === LoadingState.LOADED;
      }),
      take(1),
      map((departmentsState) => departmentsState.statuses)
    );

    combineLatest([task$, status$]).subscribe(([task, status]) => {
      this.task = task;
      this.statuses = status;
      this.loadingService.hideLoadingDialog();
    });
  }

  public changeStatus(id: number) {
    this.loadingService.showLoadingDialog();
    this.momentumStoreFacade
      .updateTask(this.taskId, { status_id: id })
      .pipe(
        filter((x) => x.updateLoadingState === LoadingState.LOADED),
        take(1)
      )
      .subscribe(() => this.loadingService.hideLoadingDialog());
  }

  public submitComment() {
    this.loadingService.showLoadingDialog();
    this.momentumStoreFacade
      .createComment(this.taskId, {
        parent_id: null,
        text: this.mainCommentContent,
      })
      .pipe(
        filter((x) => {
          return x.createLoadingState === LoadingState.LOADED;
        }),
        take(1)
      )
      .subscribe((commentSubmitResponse) => {
        this.mainCommentContent = '';
        console.log(this.mainCommentContent);
        this.loadingService.hideLoadingDialog();
      });
  }

  public submitSubComment(parentId: number) {
    this.loadingService.showLoadingDialog();
    this.momentumStoreFacade
      .createComment(this.taskId, {
        parent_id: parentId,
        text: this.subCommentContent,
      })
      .pipe(
        filter((x) => x.loadingState === LoadingState.LOADED),
        take(1)
      )
      .subscribe((commentSubmitResponse) => {
        this.replyingOn = null;
        this.subCommentContent = '';
        this.loadingService.hideLoadingDialog();
      });
  }

  ngOnDestroy(): void {
    this.momentumStoreFacade.resetSelectedTask();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
