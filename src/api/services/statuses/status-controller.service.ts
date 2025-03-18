import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/api/models/status/responses/status.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class StatusControllerService {
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
  public fetchAllStatuses(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(
      `${this.baseUrl}/statuses`,
      this.headers
    );
  }
}
