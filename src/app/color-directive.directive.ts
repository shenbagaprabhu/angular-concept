import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective implements OnChanges {

   @Input() appColorDirective :string | any;
   

  constructor(private elementRef : ElementRef ) { 
    this.elementRef.nativeElement.style.color="yellow"
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.changeColour();
  }

  changeColour(){
    this.elementRef.nativeElement.style.color = this.appColorDirective;
  }

  

}
