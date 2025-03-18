import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/api/models/department/responses/department.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentControllerService {
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
  public fetchAllDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(
      `${this.baseUrl}/departments`,
      this.headers
    );
  }
}
