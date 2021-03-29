import { Directive, ElementRef, Input } from '@angular/core';
import { SelectionListContentComponent } from '../selection-list-content/selection-list-content.component';

@Directive({
  selector: '[appSelectionListContentElement]'
})
export class SelectionListContentElementDirective {
  @Input('appSelectionListContentElement') contentElement: SelectionListContentComponent<any>;

  constructor(public elementRef: ElementRef) { }

}
