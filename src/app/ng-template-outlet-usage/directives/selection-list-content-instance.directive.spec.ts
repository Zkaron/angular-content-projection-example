import { ElementRef } from '@angular/core';
import { SelectionListContentComponent } from '../selection-list-content/selection-list-content.component';
import { SelectionListContentInstanceDirective } from './selection-list-content-instance.directive';

describe('SelectionListContentInstanceDirective', () => {
  let fakeElementRef: ElementRef;

  it('should create an instance', () => {
    fakeElementRef = {} as ElementRef;
    const directive = new SelectionListContentInstanceDirective(fakeElementRef);
    expect(directive).toBeTruthy();
  });

  it('should set a SelectionListContent component instance', () => {
    const expectedComponent = {} as SelectionListContentComponent<any>;
    fakeElementRef = {} as ElementRef;

    const directive = new SelectionListContentInstanceDirective(fakeElementRef);
    directive.contentInstance = expectedComponent;

    expect(directive.contentInstance).toEqual(expectedComponent);
  });
});
