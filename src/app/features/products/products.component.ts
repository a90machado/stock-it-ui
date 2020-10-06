import { Component, OnInit } from '@angular/core';
import { faBoxes,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public titleIcon: IconDefinition = faBoxes;

  constructor() { }

  ngOnInit() {
  }

}
