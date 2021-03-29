import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSelectionListContent]'
})
export class SelectionListContentDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
