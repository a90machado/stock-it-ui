import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { TitleWithIcon } from 'src/app/shared';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  public titleWithIcon: TitleWithIcon  = {  title: 'Manage Users',
                                            icon: faCog };
  public buttonForTitle: TitleWithIcon  = {  title: 'Create new',
                                            icon: 'pi pi-plus' };

  constructor() { }

  ngOnInit() {
  }

}
