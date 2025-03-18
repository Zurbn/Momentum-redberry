import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeCreateRequest } from 'src/api/models/employee/requests/empolyee-create-request.model';
import { Employee } from 'src/api/models/employee/responses/employee.model';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeControllerService {
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

  public fetchAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      `${this.baseUrl}/employees`,
      this.headers
    );
  }

  public addNewEmployee(
    employeeCreateRequest: EmployeeCreateRequest
  ): Observable<Employee[]> {
    return this.httpClient.post<Employee[]>(
      `${this.baseUrl}/employees`,
      employeeCreateRequest,
      this.headers
    );
  }
}
