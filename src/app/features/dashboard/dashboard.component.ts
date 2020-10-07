import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { TitleWithIcon } from 'src/app/shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public titleWithIcon: TitleWithIcon  = {  title: 'Calendar',
                                            icon: faCalendarAlt};

  constructor() { }

  public ngOnInit(): void {
  }

}
