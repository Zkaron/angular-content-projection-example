import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPopoverExpansion]',
  exportAs: 'app-popoverExpansion'
})
export class PopoverExpansionDirective {

  constructor(
    private el: ElementRef,
  ) { }

  @Input('appPopoverExpansion') set position(coords: number[]) {
    const el: HTMLElement = this.el.nativeElement;
    // el.style.position = 'fixed';
    // el.style.left = coords[0] + 'px';
    // el.style.top = coords[1] + 'px';
  }

}
