import { ElementRef } from '@angular/core';
import { SelectionListContentComponent } from '../selection-list-content/selection-list-content.component';
import { SelectionListContentElementDirective } from './selection-list-content-element.directive';

describe('SelectionListContentElementDirective', () => {
  let fakeElementRef: ElementRef;

  it('should create an instance', () => {
    fakeElementRef = {} as ElementRef;
    const directive = new SelectionListContentElementDirective(fakeElementRef);
    expect(directive).toBeTruthy();
  });

  it('should set a SelectionListContent component instance', () => {
    const expectedComponent = {} as SelectionListContentComponent<any>;
    fakeElementRef = {} as ElementRef;

    const directive = new SelectionListContentElementDirective(fakeElementRef);
    directive.contentElement = expectedComponent;

    expect(directive.contentElement).toEqual(expectedComponent);
  });
});
