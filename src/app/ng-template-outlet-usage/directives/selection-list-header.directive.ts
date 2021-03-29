import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSelectionListHeader]'
})
export class SelectionListHeaderDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
