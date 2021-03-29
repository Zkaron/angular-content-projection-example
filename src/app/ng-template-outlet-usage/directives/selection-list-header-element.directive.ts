import { Directive, ElementRef, Input } from '@angular/core';
import { SelectionListHeaderComponent } from '../selection-list-header/selection-list-header.component';

@Directive({
  selector: '[appSelectionListHeaderElement]'
})
export class SelectionListHeaderElementDirective {
  @Input('appSelectionListHeaderElement') headerElement: SelectionListHeaderComponent<any>;
  constructor(public elementRef: ElementRef) { }
}
