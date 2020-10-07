import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { TitleWithIcon } from 'src/app/shared';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public titleWithIcon: TitleWithIcon  = {  title: 'Employees',
                                            icon: faUsers};

  constructor() { }

  ngOnInit() {
  }

}
