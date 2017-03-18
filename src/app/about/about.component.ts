import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../router.animations';
declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
