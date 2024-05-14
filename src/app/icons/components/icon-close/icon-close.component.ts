import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrl: './icon-close.component.scss'
})
export class IconCloseComponent {
  faTimes = faTimes;

}
