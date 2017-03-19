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

  constructor() { }

  ngOnInit() {
  }

  onload(){
    this.counter = this.counter + 1;
    if(this.counter === 1) {
      this.show=true;
    }
  }

}
