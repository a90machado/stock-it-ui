import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.scss']
})
export class TitleContentComponent {
  @Input() icon: IconDefinition;
  @Input() title: string;
}
