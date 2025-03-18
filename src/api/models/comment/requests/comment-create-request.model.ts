export interface CommentCreateRequest {
  id: number;
  text: string;
  task_id: number;
  parent_id: number;
}
