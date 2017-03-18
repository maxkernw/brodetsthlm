import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../router.animations';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.scss'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class GigsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
