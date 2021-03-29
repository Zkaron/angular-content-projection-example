import { Directive, ElementRef, Input } from '@angular/core';
import { SelectionListHeaderComponent } from '../selection-list-header/selection-list-header.component';

@Directive({
  selector: '[appSelectionListHeaderInstance]'
})
export class SelectionListHeaderInstanceDirective {
  @Input('appSelectionListHeaderInstance') headerInstance: SelectionListHeaderComponent<any>;
  constructor(public elementRef: ElementRef) { }
}
