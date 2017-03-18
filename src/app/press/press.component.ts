import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../router.animations';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class PressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
