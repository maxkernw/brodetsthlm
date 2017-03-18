import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../router.animations';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
