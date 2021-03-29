import { ElementRef } from '@angular/core';
import { SelectionListHeaderComponent } from '../selection-list-header/selection-list-header.component';
import { SelectionListHeaderElementDirective } from './selection-list-header-element.directive';

describe('SelectionListHeaderElementDirective', () => {
  let fakeElementRef: ElementRef;

  it('should create an instance', () => {
    fakeElementRef = {} as ElementRef;
    const directive = new SelectionListHeaderElementDirective(fakeElementRef);
    expect(directive).toBeTruthy();
  });

  it('should set the component instance', () => {
    const expectedComponent = {} as SelectionListHeaderComponent<any>;
    fakeElementRef = {} as ElementRef;

    const directive = new SelectionListHeaderElementDirective(fakeElementRef);
    directive.headerElement = expectedComponent;

    expect(directive.headerElement).toEqual(expectedComponent);
  });
});
