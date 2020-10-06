import { Component, OnInit } from '@angular/core';
import { faPeopleCarry,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.scss']
})
export class RentsComponent implements OnInit {

  public titleIcon: IconDefinition = faPeopleCarry;

  constructor() { }

  ngOnInit() {
  }

}
