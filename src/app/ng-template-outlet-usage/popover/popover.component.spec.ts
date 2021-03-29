import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { OverlayModule } from '@angular/cdk/overlay';

import { PopoverItemDirective } from '../directives/popover-item.directive';
import { PopoverItem } from '../models/popover-item';
import { PopoverItemComponent } from '../popover-item/popover-item.component';

import { PopoverComponent } from './popover.component';
import { PopoverItemStubComponent } from '../testing/popover-item-stub.component';

@Component({
  selector: 'app-popover-dummy-content-ref',
  template: `
    <app-popover [popoverOptions]="popoverOptions">
      <ng-template [appPopoverItem] let-option>
        <span class="custom-template__content-ref">{{ option.item }}</span>
      </ng-template>
    </app-popover>
  `
})
export class PopoverDummyContentRefComponent {
  @Input() templateRef?: TemplateRef<any>;
  @Input() popoverOptions: PopoverItem<any>[];
  constructor() { }
}

@Component({
  selector: 'app-popover-dummy-input-ref',
  template: `
    <ng-template [appPopoverItem] let-option #ref>
      <span class="custom-template__input-ref">{{ option.item }}</span>
    </ng-template>

    <app-popover [templateRef]="ref" [popoverOptions]="popoverOptions"></app-popover>
  `
})
export class PopoverDummyInputRefComponent {
  @Input() templateRef?: TemplateRef<any>;
  @Input() popoverOptions: PopoverItem<any>[];
  constructor() { }
}

describe('PopoverComponent', () => {
  let component: PopoverComponent<any>;
  let fixture: ComponentFixture<PopoverComponent<any>>;
  let dummyComponent: PopoverDummyContentRefComponent;
  let dummyFixture: ComponentFixture<PopoverDummyContentRefComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ OverlayModule ],
      declarations: [ PopoverComponent, PopoverDummyContentRefComponent,
        PopoverDummyInputRefComponent, PopoverItemDirective, PopoverItemStubComponent
      ]
    })
    .compileComponents();
  }));

  function setupTestWithDummyInputRef(): void {
    dummyFixture = TestBed.createComponent(PopoverDummyInputRefComponent);
    dummyComponent = dummyFixture.componentInstance;
    dummyFixture.detectChanges();
  }

  function setupTestWithDummyContainerRef(): void {
    dummyFixture = TestBed.createComponent(PopoverDummyContentRefComponent);
    dummyComponent = dummyFixture.componentInstance;
    dummyFixture.detectChanges();
  }

  function setupTestWithComponent(): void {
    fixture = TestBed.createComponent(PopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should create', () => {
    setupTestWithComponent();
    expect(component).toBeTruthy();
  });

  it('should create dummy', () => {
    setupTestWithDummyContainerRef();
    expect(dummyComponent).toBeTruthy();
  });

  it('should start with the trigger with closed state', () => {
    setupTestWithComponent();
    expect(component.isOpen).toBeFalse();
  });

  it('should change the state from false to true when clicking the popover toggle', () => {
    setupTestWithComponent();

    const toggleEl: HTMLElement = fixture.debugElement.query(By.css('.popover__toggle')).nativeElement;
    toggleEl.click();

    expect(component.isOpen).toBeTrue();
  });

  it('should change the state from true to false when clicking the popover toggle', () => {
    setupTestWithComponent();
    component.isOpen = true;

    const toggleEl: HTMLElement = fixture.debugElement.query(By.css('.popover__toggle')).nativeElement;
    toggleEl.click();

    expect(component.isOpen).toBeFalse();
  });

  xit('should render an overlay when the state is true', async () => {
    setupTestWithComponent();
    component.isOpen = true;
    fixture.detectChanges();
    await fixture.whenStable();

    fixture.detectChanges();
    const overlay = fixture.debugElement.query(By.css('.cdk-overlay-container'));
    const overlay1 = fixture.debugElement.query(By.css('.cdk-overlay-pane'));

    console.log(overlay1, overlay)

    expect(overlay).toBeTruthy();
  });

  xit('should not render an overlay when the state is false', () => {
    setupTestWithComponent();
    component.isOpen = false;

    fixture.detectChanges();
    const overlay = fixture.debugElement.query(By.css('.cdk-overlay-container'));

    expect(overlay).toBeFalsy();
  });

  it('should render the popover items on the template when the overlay is open', () => {
    const options: PopoverItem<string>[] = [
      { item: 'yes', action: 'modify' },
      { item: 'no', action: 'delete' },
      { item: 'maybe', action: 'read' },
    ];
    setupTestWithComponent();
    component.isOpen = true;
    component.popoverOptions = options;

    fixture.detectChanges();
    const actualPopoverItems: HTMLElement[] = fixture.debugElement
      .queryAll(By.directive(PopoverItemComponent)).map(el => el.nativeElement);

    expect(actualPopoverItems.length).toEqual(3);
  });

  it('should use the default template if no input not contentChild templateRef are provided', () => {
    const expectedHtml = 'yes';
    const options: PopoverItem<string>[] = [
      { item: 'yes', action: 'modify' },
      { item: 'no', action: 'delete' },
      { item: 'maybe', action: 'read' },
    ];
    setupTestWithComponent();
    component.isOpen = true;
    component.popoverOptions = options;

    fixture.detectChanges();
    const actualPopoverItems: HTMLElement[] = fixture.debugElement
      .queryAll(By.directive(PopoverItemComponent)).map(el => el.nativeElement);
    
    expect(actualPopoverItems[0].firstElementChild.innerHTML).toContain(expectedHtml);
  });

  it('should use the input provided template if no contentChild templateRef is provided', () => {
    const options: PopoverItem<string>[] = [
      { item: 'yes', action: 'modify' },
      { item: 'no', action: 'delete' },
      { item: 'maybe', action: 'read' },
    ];
    setupTestWithDummyInputRef();
    dummyComponent.popoverOptions = options;

    dummyFixture.detectChanges();
    const componentInstance: PopoverComponent<any> = dummyFixture.debugElement
    .query(By.directive(PopoverComponent)).componentInstance;
    componentInstance.isOpen = true;
    dummyFixture.detectChanges();
    const actualPopoverItems: HTMLElement[] = dummyFixture.debugElement
      .queryAll(By.css('.custom-template__input-ref')).map(el => el.nativeElement);
    
    expect(actualPopoverItems.length).toBe(3);
  });

  it('should use the contentChild provided template', () => {
    const options: PopoverItem<string>[] = [
      { item: 'yes', action: 'modify' },
      { item: 'no', action: 'delete' },
      { item: 'maybe', action: 'read' },
    ];
    setupTestWithDummyContainerRef();
    dummyComponent.popoverOptions = options;

    dummyFixture.detectChanges();
    const componentInstance: PopoverComponent<any> = dummyFixture.debugElement
    .query(By.directive(PopoverComponent)).componentInstance;
    componentInstance.isOpen = true;
    dummyFixture.detectChanges();
    const actualPopoverItems: HTMLElement[] = dummyFixture.debugElement
      .queryAll(By.css('.custom-template__content-ref')).map(el => el.nativeElement);
    
    expect(actualPopoverItems.length).toBe(3);
  });

  it('should call selectItem when PopoverItem\'s itemSelected event is emited', () =>  {
    const options: PopoverItem<string>[] = [
      { item: 'yes', action: 'modify' },
      { item: 'no', action: 'delete' },
      { item: 'maybe', action: 'read' },
    ];
    const expectedOption = options[2];
    setupTestWithComponent();
    component.isOpen = true;
    component.popoverOptions = options;
    spyOn(component, 'selectedItem').and.callFake(() => {});

    fixture.detectChanges();
    const thirdOption: PopoverItemComponent<any> = fixture.debugElement
      .queryAll(By.directive(PopoverItemComponent))[2].componentInstance;
    thirdOption.itemSelected.emit(expectedOption);

    expect(component.selectedItem).toHaveBeenCalledWith(expectedOption);
  });

  it('#selectedItem should emit the selected item and close the popover', () => {
    const expectedItem: PopoverItem<string> = { item: 'yes', action: 'modify' };
    setupTestWithComponent();
    component.isOpen = true;
    spyOn(component.itemSelected, 'emit').and.callFake(() => {});

    component.selectedItem(expectedItem);

    expect(component.itemSelected.emit).toHaveBeenCalledWith(expectedItem);
    expect(component.isOpen).toBeFalse();
  });
});
