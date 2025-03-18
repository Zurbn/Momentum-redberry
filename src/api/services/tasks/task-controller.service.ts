import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskCreateRequest } from 'src/api/models/task/requests/task-create-request.model';
import { TaskUpdateRequest } from 'src/api/models/task/requests/task-update-request.model';
import { Task } from 'src/api/models/task/responses/task.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskControllerService {
  private baseUrl = `${environment.momentumBaseUrl}`;

  constructor(private httpClient: HttpClient) {}

  private get headers() {
    return {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${environment.momentumAuthToken}`,
      }),
    };
  }

  public fetchAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.baseUrl}/tasks`, this.headers);
  }

  public fetchSingleTask(id: number): Observable<Task> {
    return this.httpClient.get<Task>(
      `${this.baseUrl}/tasks/${id}`,
      this.headers
    );
  }
  public createTask(taskCreateRequest: TaskCreateRequest): Observable<Task> {
    return this.httpClient.post<Task>(
      `${this.baseUrl}/tasks`,
      taskCreateRequest,
      this.headers
    );
  }

  public updateTaskStatus(
    id: number,
    taskUpdateRequest: TaskUpdateRequest
  ): Observable<Task> {
    return this.httpClient.put<Task>(
      `${this.baseUrl}/tasks/${id}`,
      taskUpdateRequest,
      this.headers
    );
  }
}
