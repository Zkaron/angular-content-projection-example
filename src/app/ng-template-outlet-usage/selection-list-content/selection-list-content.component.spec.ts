import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatListModule, MatListOption, MatSelectionListChange } from '@angular/material/list';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverItemDirective } from '../directives/popover-item.directive';
import { SelectionListHeadingDirective } from '../directives/selection-list-heading.directive';
import { SelectionListItemDirective } from '../directives/selection-list-item.directive';
import { PopoverItem } from '../models/popover-item';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverStubComponent } from '../testing/popover-stub.component';

import { SelectionListContentComponent } from './selection-list-content.component';

@Component({
  selector: 'app-selection-list-content-dummy',
  template: `
    <app-selection-list-content>
      <ng-template [appSelectionListHeading] let-item>
          <span class="selection-list-headings__ref">{{ item }}</span>
      </ng-template>

      <ng-template [appSelectionListItem] let-item>
        <span class="selection-list-item__ref">{{ item }}</span>
      </ng-template>

      <ng-template [appPopoverItem] let-item>
        <span class="popover-item__ref">{{ item }}</span>
      </ng-template>
    </app-selection-list-content>
  `,
})
export class SelectionListContentDummyComponent {
  constructor() { }
}

describe('SelectionListContentComponent', () => {
  let component: SelectionListContentComponent<any>;
  let fixture: ComponentFixture<SelectionListContentComponent<any>>;
  let dummyComponent: SelectionListContentDummyComponent
  let dummyFixture: ComponentFixture<SelectionListContentDummyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MatListModule, NoopAnimationsModule ],
      declarations: [ SelectionListContentComponent, SelectionListContentDummyComponent,
        PopoverStubComponent, SelectionListItemDirective, PopoverItemDirective, SelectionListHeadingDirective
      ]
    })
    .compileComponents();
  }));

  function setup(): void {
    fixture = TestBed.createComponent(SelectionListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function setupDummy(): void {
    dummyFixture = TestBed.createComponent(SelectionListContentDummyComponent);
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
    const matOption: MatListOption = fixture.debugElement
            .queryAll(By.directive(MatListOption))[1].componentInstance;

    expect(matOption.checkboxPosition).toEqual('before');
  });

  it('#selectAll should call child list\'s selectAll method and emit a change event with all options', () => {
    setup();
    const expectedEvent = new MatSelectionListChange(
      component.selectionList, null, component.selectionList.options.toArray()
    );
    spyOn(component.selectionList, 'selectAll').and.callFake(() => {});
    spyOn(component.selectionList.selectionChange, 'emit').and.callFake(() => {});

    component.selectAll();

    expect(component.selectionList.selectAll).toHaveBeenCalled();
    expect(component.selectionList.selectionChange.emit).toHaveBeenCalledWith(expectedEvent);
  });

  it('#deselectAll should call child list\'s deselectAll method and emit a change event with all options', () => {
    setup();
    const expectedEvent = new MatSelectionListChange(
      component.selectionList, null, component.selectionList.options.toArray()
    );
    spyOn(component.selectionList, 'deselectAll').and.callFake(() => {});
    spyOn(component.selectionList.selectionChange, 'emit').and.callFake(() => {});

    component.deselectAll();

    expect(component.selectionList.deselectAll).toHaveBeenCalled();
    expect(component.selectionList.selectionChange.emit).toHaveBeenCalledWith(expectedEvent);
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
    const componentInstance: SelectionListContentComponent<any> = dummyFixture.debugElement
      .query(By.directive(SelectionListContentComponent)).componentInstance;
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
    const componentInstance: SelectionListContentComponent<any> = dummyFixture.debugElement
      .query(By.directive(SelectionListContentComponent)).componentInstance;
    componentInstance.items = listItems;

    dummyFixture.detectChanges();
    const matOptionsEl: HTMLElement[] = dummyFixture.debugElement
      .queryAll(By.css('.selection-list-item__ref')).map(el => el.nativeElement);

    expect(matOptionsEl.length).toBe(3);
  });

  it('should not render the offset element if no heading contentChild is passed ', () => {
    setup();
    const listItems: string[] = ['one', 'two', 'three'];
    component.items = listItems;

    fixture.detectChanges();
    const offsetElement = fixture.debugElement
      .query(By.css('.selection-list-content__column-headers-offset'));

    expect(offsetElement).toBeFalsy()
  });

  it('should render the offset element if heading contentChild is passed ', () => {
    setupDummy();
    const listItems: string[] = ['one', 'two', 'three'];
    const componentInstance: SelectionListContentComponent<any> = dummyFixture.debugElement
      .query(By.directive(SelectionListContentComponent)).componentInstance;
    componentInstance.items = listItems;

    dummyFixture.detectChanges();
    const offsetElement = dummyFixture.debugElement
      .query(By.css('.selection-list-content__column-headers-offset'));

    expect(offsetElement).toBeTruthy()
  });

  it('should not render headings element if no heading contentChild is passed ', () => {
    setup();
    const listItems: string[] = ['one', 'two', 'three'];
    component.items = listItems;

    fixture.detectChanges();
    const headingsContainerEl: HTMLElement = fixture.debugElement
      .query(By.css('.selection-list-content__column-headers')).nativeElement;

    expect(headingsContainerEl.children.length).toBe(0)
  });

  it('should render headings element if the heading contentChild is passed ', () => {
    setupDummy();
    const listItems: string[] = ['one', 'two', 'three'];
    const componentInstance: SelectionListContentComponent<any> = dummyFixture.debugElement
      .query(By.directive(SelectionListContentComponent)).componentInstance;
    componentInstance.items = listItems;

    dummyFixture.detectChanges();
    const headingElements = dummyFixture.debugElement
      .queryAll(By.css('.selection-list-headings__ref'));

    expect(headingElements.length).toBe(1)
  });
});
