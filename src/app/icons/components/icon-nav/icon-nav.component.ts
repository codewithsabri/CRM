import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrl: './icon-nav.component.scss'
})
export class IconNavComponent {
  faBars = faBars;
}
