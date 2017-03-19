import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../router.animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [fadeIn()]
})
export class WorkComponent implements OnInit {
  hidden = true;
  show:boolean = false;
  counter= 0;
  width ="100%"
  height = "450"

  constructor() {
  }

  ngOnInit() {
    if(window.screen.width < 450) {
      this.height = "250"
    }
  }

  onload(){
    this.counter = this.counter + 1;
    if(this.counter === 1) {
      this.show=true;
    }
  }

}
