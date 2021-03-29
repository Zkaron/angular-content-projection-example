import { TemplateRef } from '@angular/core';
import { PopoverItemComponent } from '../popover-item/popover-item.component';
import { PopoverItemDirective } from './popover-item.directive';

describe('PopoverItemDirective', () => {
  let fakeTemplateRef: TemplateRef<any>;

  it('should create an instance', () => {
    fakeTemplateRef = {} as TemplateRef<any>;
    const directive = new PopoverItemDirective(fakeTemplateRef);
    expect(directive).toBeTruthy();
  });

  it('should set a PopoverItem component instance', () => {
    const expectedPopoverItem = {} as PopoverItemComponent<any>;
    fakeTemplateRef = {} as TemplateRef<any>;

    const directive = new PopoverItemDirective(fakeTemplateRef);
    directive.appPopoverItem = expectedPopoverItem;

    expect(directive.appPopoverItem).toEqual(expectedPopoverItem);
  });
});
