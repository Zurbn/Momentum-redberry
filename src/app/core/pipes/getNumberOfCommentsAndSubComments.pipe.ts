import { Pipe, type PipeTransform } from '@angular/core';
import { Comment } from 'src/api/models/comment/responses/comment.model';

@Pipe({
  name: 'appGetNumberOfCommentsAndSubComments',
  standalone: true,
})
export class GetNumberOfCommentsAndSubCommentsPipe implements PipeTransform {
  transform(comments: Comment[]): number {
    return (
      comments?.flatMap((comment) => comment?.sub_comments)?.length +
        comments?.length || 0
    );
  }
}
