import { TemplateRef } from '@angular/core';
import { SelectionListHeaderDirective } from './selection-list-header.directive';

describe('SelectionListHeaderDirective', () => {
  let fakeTemplateRef: TemplateRef<any>;

  it('should create an instance', () => {
    fakeTemplateRef = {} as TemplateRef<any>;
    const directive = new SelectionListHeaderDirective(fakeTemplateRef);
    expect(directive).toBeTruthy();
  });
});
