import { TemplateRef } from '@angular/core';
import { SelectionListItemDirective } from './selection-list-item.directive';

describe('SelectionListItemDirective', () => {
  let fakeTemplateRef: TemplateRef<any>;

  it('should create an instance', () => {
    fakeTemplateRef = {} as TemplateRef<any>;
    const directive = new SelectionListItemDirective(fakeTemplateRef);
    expect(directive).toBeTruthy();
  });
});
