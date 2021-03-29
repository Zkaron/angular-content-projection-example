import { Directive, ElementRef, Input } from '@angular/core';
import { SelectionListContentComponent } from '../selection-list-content/selection-list-content.component';

@Directive({
  selector: '[appSelectionListContentInstance]'
})
export class SelectionListContentInstanceDirective {
  @Input('appSelectionListContentInstance') contentInstance: SelectionListContentComponent<any>;

  constructor(public elementRef: ElementRef) { }

}
