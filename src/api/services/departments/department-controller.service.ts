import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from 'src/api/models/department/responses/department.model';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentControllerService {
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
  public fetchAllDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(
      `${this.baseUrl}/departments`,
      this.headers
    );
  }
}
