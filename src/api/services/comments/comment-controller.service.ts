import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommentCreateRequest } from 'src/api/models/comment/requests/comment-create-request.model';

import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class CommentControllerService {
  private baseUrl = `${enviroment.momentumBaseUrl}`;

  constructor(private httpClient: HttpClient) {}

  private get headers() {
    return {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${enviroment.momentumAuthToken}`,
      }),
    };
  }
  public fetchAllComments(taskID: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      `${this.baseUrl}/tasks/${taskID}/comments`,
      this.headers
    );
  }

  public createNewComment(
    commentCreateRequest: CommentCreateRequest,
    taskID: number
  ): Observable<Comment[]> {
    return this.httpClient.post<Comment[]>(
      `${this.baseUrl}/tasks/${taskID}/comments`,
      commentCreateRequest,
      this.headers
    );
  }
}
