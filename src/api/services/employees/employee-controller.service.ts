import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeCreateRequest } from 'src/api/models/employee/requests/employee-create-request.model';
import { Employee } from 'src/api/models/employee/responses/employee.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeControllerService {
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

  public fetchAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      `${this.baseUrl}/employees`,
      this.headers
    );
  }

  public addNewEmployee(
    employeeCreateRequest: EmployeeCreateRequest
  ): Observable<Employee> {
    const formData = new FormData();

    formData.append('name', employeeCreateRequest.name);
    formData.append('surname', employeeCreateRequest.surname);
    formData.append(
      'department_id',
      employeeCreateRequest.department_id.toString()
    );

    if (employeeCreateRequest.avatar instanceof File) {
      formData.append('avatar', employeeCreateRequest.avatar);
    }
    const headers = new HttpHeaders({
      Accept: 'application/json',
      Authorization: `Bearer ${environment.momentumAuthToken}`,
    });

    return this.httpClient.post<Employee>(
      `${this.baseUrl}/employees`,
      formData,
      { headers }
    );
  }
}
