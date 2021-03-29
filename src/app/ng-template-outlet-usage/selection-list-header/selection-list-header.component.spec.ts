import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatListModule, MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverItem } from '../models/popover-item';
import { PopoverComponent } from '../popover/popover.component';
import { SelectionListItemDirective } from '../directives/selection-list-item.directive';
import { PopoverItemDirective } from '../directives/popover-item.directive';

import { SelectionListHeaderComponent } from './selection-list-header.component';
import { PopoverStubComponent } from '../testing/popover-stub.component';


@Component({
  selector: 'app-selection-list-header-dummy',
  template: `
    <app-selection-list-header>
      <ng-template [appSelectionListItem] let-item>
        <span class="selection-list-item__ref">{{ item }}</span>
      </ng-template>

      <ng-template [appPopoverItem] let-item>
        <span class="popover-item__ref">{{ item }}</span>
      </ng-template>
    </app-selection-list-header>
  `,
})
export class SelectionListHeaderDummyComponent {
  constructor() { }
}

describe('SelectionListHeaderComponent', () => {
  let component: SelectionListHeaderComponent<any>;
  let fixture: ComponentFixture<SelectionListHeaderComponent<any>>;
  let dummyComponent: SelectionListHeaderDummyComponent
  let dummyFixture: ComponentFixture<SelectionListHeaderDummyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MatListModule, NoopAnimationsModule ],
      declarations: [ SelectionListHeaderComponent, SelectionListHeaderDummyComponent,
        PopoverStubComponent, SelectionListItemDirective, PopoverItemDirective
      ]
    })
    .compileComponents();
  }));

  function setup(): void {
    fixture = TestBed.createComponent(SelectionListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function setupDummy(): void {
    dummyFixture = TestBed.createComponent(SelectionListHeaderDummyComponent);
    dummyComponent = dummyFixture.componentInstance;
    dummyFixture.detectChanges();
  }

  it('should create', () => {
    setup();
    expect(component).toBeTruthy();
  });

  it('should call changeSelection when MatSelectionList\'s selectionChange event is emited', () => {
    setup();
    const expectedEvent: MatSelectionListChange = {} as MatSelectionListChange;
    spyOn(component, 'changeSelection').and.callFake(() => {});

    component.selectionList.selectionChange.emit(expectedEvent);

    expect(component.changeSelection).toHaveBeenCalledOnceWith(expectedEvent);
  });

  it('#changeSelection should emit the MatSelectionList\'s selectionChange event', () => {
    setup();
    const expectedEvent: MatSelectionListChange = {} as MatSelectionListChange;
    spyOn(component.selectionChange, 'emit').and.callFake(() => {});

    component.changeSelection(expectedEvent);

    expect(component.selectionChange.emit).toHaveBeenCalledOnceWith(expectedEvent);
  });

  it('should not render MatListOptions if no items are provided', () => {
    setup();
    const matOptions = fixture.debugElement.queryAll(By.directive(MatListOption));
    expect(matOptions.length).toBe(0);
  });

  it('should render a MatListOption for each provided item', () => {
    setup();
    const expectedItems: string[] = ['one', 'two', 'three'];
    component.items = expectedItems;

    fixture.detectChanges();
    const matOptions = fixture.debugElement.queryAll(By.directive(MatListOption));

    expect(matOptions.length).toBe(3);
  });

  it('should render the MatListOptions with their checkbox on the left', () => {
    setup();
    const expectedItems: string[] = ['one', 'two', 'three'];
    component.items = expectedItems;

    fixture.detectChanges();
    const matOption: MatListOption = fixture.debugElement.queryAll(By.directive(MatListOption))[1].componentInstance;

    expect(matOption.checkboxPosition).toEqual('before');
  });

  it('#selectAll should call child list\'s selectAll method', () => {
    setup();
    spyOn(component.selectionList, 'selectAll').and.callFake(() => {});

    component.selectAll();

    expect(component.selectionList.selectAll).toHaveBeenCalled();
  });

  it('#deselectAll should call child list\'s deselectAll method', () => {
    setup();
    spyOn(component.selectionList, 'deselectAll').and.callFake(() => {});

    component.deselectAll();

    expect(component.selectionList.deselectAll).toHaveBeenCalled();
  });

  it('should call selectedItem method when the Popover\'s itemSelected event is emited', () => {
    setup();
    const listItems: string[] = ['one', 'two', 'three'];
    const expectedEvent = { item: 'hiho' } as PopoverItem<string>;
    component.items = listItems;
    spyOn(component, 'selectedItem').and.callFake(() => {});

    fixture.detectChanges();
    const popover: PopoverComponent<string> = fixture.debugElement
      .query(By.directive(PopoverComponent)).componentInstance;
    popover.itemSelected.emit(expectedEvent)

      expect(component.selectedItem).toHaveBeenCalledWith(expectedEvent);
  });

  it('#selectedItem should emit the parameter as an popoverOptionSelected event', () => {
    setup();
    const expectedEvent = { item: 'hiho' } as PopoverItem<string>;
    spyOn(component.popoverOptionSelected, 'emit').and.callFake(() => {});

    component.selectedItem(expectedEvent);

    expect(component.popoverOptionSelected.emit).toHaveBeenCalledOnceWith(expectedEvent);
  });

  it('should pass the templateRef and popoverOptions to each PopoverOption', () => {
    setupDummy();
    const listItems: string[] = ['one', 'two', 'three'];
    const expectedPopoverOptions: PopoverItem<number>[] = [
      {action: 'read', item: 10},
      {action: 'modify', item: 104},
      {action: 'delete', item: 90}, 
    ];
    const componentInstance: SelectionListHeaderComponent<any> = dummyFixture.debugElement
      .query(By.directive(SelectionListHeaderComponent)).componentInstance;
    componentInstance.items = listItems;
    componentInstance.popoverOptions = expectedPopoverOptions;

    dummyFixture.detectChanges();
    const popoverInstance: PopoverComponent<number> = dummyFixture.debugElement
      .query(By.directive(PopoverComponent)).componentInstance;

    expect(popoverInstance.popoverOptions).toEqual(componentInstance.popoverOptions);
    expect(popoverInstance.templateRef).toEqual(componentInstance.popoverItemRef.templateRef);
  });

  it('should use the default template if none is passed as a contentChild as the option content', () => {
    setup();
    const listItems: string[] = ['one', 'two', 'three']
    component.items = listItems;

    fixture.detectChanges();
    const matOptionsEl: HTMLElement[] = fixture.debugElement
      .queryAll(By.directive(MatListOption)).map(el => el.nativeElement);
    
    expect(matOptionsEl[1].firstElementChild.innerHTML).toContain(listItems[1]);
  });

  it('should use the passed contentChild template as the option content ', () => {
    setupDummy();
    const listItems: string[] = ['one', 'two', 'three'];
    const componentInstance: SelectionListHeaderComponent<any> = dummyFixture.debugElement
      .query(By.directive(SelectionListHeaderComponent)).componentInstance;
    componentInstance.items = listItems;

    dummyFixture.detectChanges();
    const matOptionsEl: HTMLElement[] = dummyFixture.debugElement
      .queryAll(By.css('.selection-list-item__ref')).map(el => el.nativeElement);

    expect(matOptionsEl.length).toBe(3);
  });
});
