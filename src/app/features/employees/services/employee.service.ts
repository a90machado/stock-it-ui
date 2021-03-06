import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private url = '/api/employees'

  constructor(private httpClient: HttpClient) {}

  public createNewEmployee(employee: Employee, update: boolean): Observable<Employee> {
    console.log(update)
    return update ? this.httpClient.put<Employee>(this.url, employee) : this.httpClient.post<Employee>(this.url, employee);
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url);
  }

  public getEmployeeByNumber(employeeNumber: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.url + '/' + employeeNumber);
  }

}
