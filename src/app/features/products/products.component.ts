import { Component, OnInit } from '@angular/core';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { TitleWithIcon } from 'src/app/shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public titleWithIcon: TitleWithIcon  = {  title: 'Products',
                                            icon: faBoxes};

  constructor() { }

  ngOnInit() {
  }

}
