import { Component, Input } from '@angular/core';
import { TitleWithIcon } from '../../models/titleWithIcon';

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.scss']
})
export class TitleContentComponent {
  @Input() titleWithIcont: TitleWithIcon;
  @Input() buttonWithIcon?: TitleWithIcon;
}
