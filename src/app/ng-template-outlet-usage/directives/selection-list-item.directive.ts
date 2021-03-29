import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSelectionListItem]'
})
export class SelectionListItemDirective {

  constructor(public templateRef: TemplateRef<any>) { }
}
