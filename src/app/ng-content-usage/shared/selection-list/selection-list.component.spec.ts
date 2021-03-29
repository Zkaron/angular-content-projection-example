import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, OnInit, QueryList } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatSelectionListHarness } from '@angular/material/list/testing';

import { SelectionListComponent } from './selection-list.component';
import { SelectionListHeaderComponent } from '../selection-list-header/selection-list-header.component';
import { SelectionListContentComponent } from '../selection-list-content/selection-list-content.component';
import { SelectionListOptionComponent } from '../selection-list-option/selection-list-option.component';
import { PopoverOptionComponent } from '../popover-option/popover-option.component';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-selection-list-dummy',
  template: `
    <app-selection-list>
      <app-selection-list-header>
        <app-selection-list-option>Header</app-selection-list-option>
      </app-selection-list-header>
      <app-selection-list-content>
        <mat-selection-list>
          <mat-list-option>
            <app-selection-list-option>Option 1</app-selection-list-option>
          </mat-list-option>
          <mat-list-option>
            <app-selection-list-option>Option 2</app-selection-list-option>
          </mat-list-option>
        </mat-selection-list>
      </app-selection-list-content>
    </app-selection-list>
  `,
})
export class SelectionListDummyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

describe('SelectionListComponent', () => {
  let component: SelectionListComponent;
  let dummyFixture: ComponentFixture<SelectionListDummyComponent>;
  let dummyComponent: SelectionListDummyComponent;
  let loader: HarnessLoader;


  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          SelectionListComponent,
          SelectionListDummyComponent,
          SelectionListHeaderComponent,
          SelectionListContentComponent,
          SelectionListOptionComponent,
        ],
        imports: [MatListModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    dummyFixture = TestBed.createComponent(SelectionListDummyComponent);
    loader = TestbedHarnessEnvironment.loader(dummyFixture);
    dummyComponent = dummyFixture.componentInstance;
    component = dummyFixture.debugElement.query(By.directive(SelectionListComponent)).componentInstance;
    dummyFixture.detectChanges();
  });

  // Function to avoid failing tests that depends on the popover
  function addPopoverWithOption(): void {
    component.selectionListHeader.option.popover = new PopoverComponent();
    component.selectionListHeader.option.popover.popoverOptions = new QueryList<PopoverOptionComponent>();
    component.selectionListHeader.option.popover.popoverOptions[0] = new PopoverOptionComponent();
  }

  function addEmptyPopover(): void {
    component.selectionListHeader.option.popover = new PopoverComponent();
    component.selectionListHeader.option.popover.popoverOptions = new QueryList<PopoverOptionComponent>();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[selectionListHeader] should have a value when set as content child', () => {
    expect(component.selectionListHeader).toBeTruthy();
  });

  it('[selectionListContent] should have a value when set as content child', () => {
    expect(component.selectionListContent).toBeTruthy();
  });

  it('should hide header popover when no content option is selected', () => {
    component.selectionListContent.deselectAll();

    expect(component.selectionListHeader.option.displayPopover).toBeFalse();
  });

  it('should show header popover when one content option is selected and the [popover with options]', async () => {
    const listHarnesses = await loader.getAllHarnesses(MatSelectionListHarness);
    addPopoverWithOption();
    const contentOptions = await listHarnesses[1].getItems();
    await contentOptions[1].select();

    expect(component.selectionListHeader.option.displayPopover).toBeTrue();
  });

  it('should show header popover when more than one content option is selected [popover with options]', async () => {
    const listHarnesses = await loader.getAllHarnesses(MatSelectionListHarness);
    addPopoverWithOption();
    const contentOptions = await listHarnesses[1].getItems();
    await contentOptions[0].select();
    await contentOptions[1].select();

    expect(component.selectionListHeader.option.displayPopover).toBeTrue();
  });

  it('should hide header popover after deselecting all content options', async () => {
    const listHarnesses = await loader.getAllHarnesses(MatSelectionListHarness);
    addPopoverWithOption();
    const contentOptions = await listHarnesses[1].getItems();
    await contentOptions[0].select();
    await contentOptions[1].select();
    await contentOptions[0].deselect();
    await contentOptions[1].deselect();

    expect(component.selectionListHeader.option.displayPopover).toBeFalse();
  });

  it('should select all content options when selecting the header option', async () => {
    const listHarnesses = await loader.getAllHarnesses(MatSelectionListHarness);
    const contentList = listHarnesses[1];
    const headerOptions = await listHarnesses[0].getItems();
    await headerOptions[0].select();

    const allContentListItems = await contentList.getItems();
    const selectedContentListItems = await contentList.getItems({ selected: true });

    expect(selectedContentListItems.length).toBe(allContentListItems.length);
  });

  it('should deselect all content options when deselecting the header options is fired', async () => {
    const listHarnesses = await loader.getAllHarnesses(MatSelectionListHarness);
    const contentList = listHarnesses[1];
    const headerOptions = await listHarnesses[0].getItems();
    await headerOptions[0].select(); // select all items
    await headerOptions[0].deselect(); // deselect all items

    const selectedContentListItems = await contentList.getItems({ selected: true });

    expect(selectedContentListItems.length).toBe(0);
  });

  it('should hide header popover when one content option is selected [popover without options]', async () => {
    const listHarnesses = await loader.getAllHarnesses(MatSelectionListHarness);
    addEmptyPopover();
    const contentOptions = await listHarnesses[1].getItems();
    // await contentOptions[0].select();
    await contentOptions[1].select();

    expect(component.selectionListHeader.option.displayPopover).toBeFalse();
  });
});
