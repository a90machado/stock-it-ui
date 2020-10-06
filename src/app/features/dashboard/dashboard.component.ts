import { Component, OnInit } from '@angular/core';
import { faCalendarAlt,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public titleIcon: IconDefinition = faCalendarAlt;

  constructor() { }

  public ngOnInit(): void {
  }

}
