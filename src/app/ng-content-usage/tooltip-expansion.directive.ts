import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTooltipExpansion]',
  exportAs: 'app-tooltipExpansion'
})
export class TooltipExpansionDirective {

  constructor(
    private el: ElementRef,
  ) { }

  @Input('appTooltipExpansion') set position(coords: number[]) {
    const el: HTMLElement = this.el.nativeElement;
    el.style.position = 'fixed';
    el.style.left = coords[0] + 'px';
    el.style.top = coords[1] + 'px';
  }

}
