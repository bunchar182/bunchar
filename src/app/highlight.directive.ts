import { Directive, Input, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color;

  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('mouseover')
  onmouseover()
  {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  onmouseleave()
  {

    this.el.nativeElement.style.backgroundColor = '';
  }


}
