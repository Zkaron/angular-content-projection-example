import { TemplateRef } from '@angular/core';
import { SelectionListContentDirective } from './selection-list-content.directive';

describe('SelectionListContentDirective', () => {
  let fakeTemplateRef: TemplateRef<any>;

  it('should create an instance', () => {
    fakeTemplateRef = {} as TemplateRef<any>;
    const directive = new SelectionListContentDirective(fakeTemplateRef);
    expect(directive).toBeTruthy();
  });
});
