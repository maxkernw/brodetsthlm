import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../router.animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
