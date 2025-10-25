import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[BorderImage]'
})
export class BorderImageDirective {
  @Input() defualtColor:string="red";
  @Input("BorderImage") myColor:string="orange"


  constructor(public refEle:ElementRef ) {
    this.refEle.nativeElement.style.border="5px solid red";
    this.refEle.nativeElement.style.padding="10px";
   }
   
  @HostListener("mouseover") func1(){
    this.refEle.nativeElement.style.border=`5px solid ${this.myColor}`;
    this.refEle.nativeElement.style.padding="10px";
   }
  @HostListener("mouseout") func2(){
    this.refEle.nativeElement.style.border=`5px solid ${this.defualtColor}`;
    this.refEle.nativeElement.style.padding="10px";
   }
}
