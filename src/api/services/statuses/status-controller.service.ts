import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/api/models/status/responses/status.model';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class StatusControllerService {
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
  public fetchAllStatuses(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(
      `${this.baseUrl}/statuses`,
      this.headers
    );
  }
}
