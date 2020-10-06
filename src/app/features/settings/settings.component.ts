import { Component, OnInit } from '@angular/core';
import { faCog,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public titleIcon: IconDefinition = faCog;

  constructor() { }

  ngOnInit() {
  }

}
