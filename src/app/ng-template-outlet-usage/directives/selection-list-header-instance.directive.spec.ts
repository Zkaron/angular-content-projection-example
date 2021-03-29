import { ElementRef } from '@angular/core';
import { SelectionListHeaderComponent } from '../selection-list-header/selection-list-header.component';
import { SelectionListHeaderInstanceDirective } from './selection-list-header-instance.directive';

describe('SelectionListHeaderInstanceDirective', () => {
  let fakeElementRef: ElementRef;

  it('should create an instance', () => {
    fakeElementRef = {} as ElementRef;
    const directive = new SelectionListHeaderInstanceDirective(fakeElementRef);
    expect(directive).toBeTruthy();
  });

  it('should set the component instance', () => {
    const expectedComponent = {} as SelectionListHeaderComponent<any>;
    fakeElementRef = {} as ElementRef;

    const directive = new SelectionListHeaderInstanceDirective(fakeElementRef);
    directive.headerInstance = expectedComponent;

    expect(directive.headerInstance).toEqual(expectedComponent);
  });
});
