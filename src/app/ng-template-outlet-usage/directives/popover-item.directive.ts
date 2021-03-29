import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appPopoverItem]'
})
export class PopoverItemDirective<T> {
  @Input() appPopoverItem: T;

  constructor(
    public templateRef: TemplateRef<any>,
    ) {}
}
