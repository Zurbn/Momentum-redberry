import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Priority } from 'src/api/models/priority/responses/priority.model';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PriorityControllerService {
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
  public fetchAllPriorities(): Observable<Priority[]> {
    return this.httpClient.get<Priority[]>(
      `${this.baseUrl}/priorities`,
      this.headers
    );
  }
}
