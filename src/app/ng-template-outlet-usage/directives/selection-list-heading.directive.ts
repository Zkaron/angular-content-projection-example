import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSelectionListHeading]'
})
export class SelectionListHeadingDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
