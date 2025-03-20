import { Pipe, type PipeTransform } from '@angular/core';
import { Task } from 'src/api/models/task/responses/task.model';
import { MomentumStoreFacade } from 'src/stores/momentum-store/facade';

@Pipe({
  name: 'appGetNumberOfComments',
  standalone: true,
})
export class GetNumberOfCommentsPipe implements PipeTransform {
  constructor(private momentumStoreFacade: MomentumStoreFacade) {}
  transform(task:Task): unknown {
    return this.momentumStoreFacade.retrieveCommentsForASpecificTask(task.id)
  }
}
