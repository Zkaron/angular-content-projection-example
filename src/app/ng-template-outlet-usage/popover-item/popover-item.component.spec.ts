import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PopoverItem } from '../models/popover-item';

import { PopoverItemComponent } from './popover-item.component';

describe('PopoverItemComponent', () => {
  let component: PopoverItemComponent<any>;
  let fixture: ComponentFixture<PopoverItemComponent<any>>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the provided input item as it', () => {
    const expectedItem: PopoverItem<any> = { item: 'item', action: 'read' };
    component.popoverItem = expectedItem;
    expect(component.popoverItem).toEqual(expectedItem);
  });

  it('should call selectItem method when the component is clicked', () => {
    const expectedItem: PopoverItem<any> = { item: 'item', action: 'read' };
    component.popoverItem = expectedItem;
    spyOn(component, 'selectItem').and.callFake(() => {});

    const popoverItemEl: HTMLElement = fixture.debugElement.query(By.css('.popover-item')).nativeElement;
    popoverItemEl.click();
    fixture.detectChanges();

    expect(component.selectItem).toHaveBeenCalled();
  });

  it('#selectItem should emit the component\'s item', () => {
    const expectedItem: PopoverItem<any> = { item: 'item', action: 'read' };
    component.popoverItem = expectedItem;
    spyOn(component.itemSelected, 'emit').and.callFake(() =>{});

    component.selectItem();
    fixture.detectChanges();

    expect(component.itemSelected.emit).toHaveBeenCalledOnceWith(expectedItem);
  });
});
