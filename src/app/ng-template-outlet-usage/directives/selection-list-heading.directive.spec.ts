import { TemplateRef } from '@angular/core';
import { SelectionListHeadingDirective } from './selection-list-heading.directive';

describe('SelectionListHeadingDirective', () => {
  let fakeTemplateRef: TemplateRef<any>;

  it('should create an instance', () => {
    fakeTemplateRef = {} as TemplateRef<any>;
    const directive = new SelectionListHeadingDirective(fakeTemplateRef);
    expect(directive).toBeTruthy();
  });
});
