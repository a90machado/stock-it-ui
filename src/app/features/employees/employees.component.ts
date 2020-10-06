import { Component, OnInit } from '@angular/core';
import { faUsers,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public titleIcon: IconDefinition = faUsers;

  constructor() { }

  ngOnInit() {
  }

}
