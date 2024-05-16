import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {

  //Je n'itialise pas la valeur en faisant label!

  @Input() label!: string;
  @Input() icon!: string;
  @Input() routeInfo!: string;
  @Input() styleBtn!: "";
}
