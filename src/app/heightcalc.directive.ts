import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHeightcalc]'
})
export class HeightcalcDirective implements AfterViewInit {

  constructor(private el: ElementRef) {

}
ngAfterViewInit() {
  console.log(this.el.nativeElement.scrollHeight)
  this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
}

}
