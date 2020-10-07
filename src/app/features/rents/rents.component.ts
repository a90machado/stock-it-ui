import { Component, OnInit } from '@angular/core';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { TitleWithIcon } from 'src/app/shared';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.scss']
})
export class RentsComponent implements OnInit {

  public titleWithIcon: TitleWithIcon  = {  title: 'Rents',
                                            icon: faPeopleCarry};

  constructor() { }

  ngOnInit() {
  }

}
