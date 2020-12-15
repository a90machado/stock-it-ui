import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { SortEvent } from 'primeng/api';
import { Employee, TableCol, TitleWithIcon } from 'src/app/shared';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  public titleWithIcon: TitleWithIcon = { title: 'Employees', icon: faUsers };

  public employees: Employee[];
  public displayColumns: TableCol[] = [
    {
      field: 'employeeNumber',
      header: 'Number',
      sortable: false,
    },
    {
      field: 'firstName',
      extraField: 'lastName',
      header: 'Name',
      sortable: false,
    },
    {
      field: 'role',
      header: 'Role',
      sortable: false,
    },
    {
      field: 'market',
      header: 'Market',
      sortable: false,
    },
    {
      field: 'startDate',
      header: 'Start Date',
      sortable: false,
    },
  ];

  constructor(private employeeService: EmployeeService,
              private router: Router) {}

  public ngOnInit(): void {
    this.employees = [];
  }

  public customSort(event: SortEvent): void {
    event.data.sort((data1, data2) => {
      const value1 = data1[event.field];
      const value2 = data2[event.field];
      let result = null;
      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      }
      return event.order * result;
    });
  }

  public goToCreateNewEmployee(): void {
    this.router.navigate(['employees/create-new']);
  }
}
