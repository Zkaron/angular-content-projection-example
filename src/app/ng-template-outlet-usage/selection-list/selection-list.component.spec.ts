import { Component, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SelectionListContentInstanceDirective as SelectionListContentInstanceDirective } from '../directives/selection-list-content-instance.directive';
import { SelectionListContentDirective } from '../directives/selection-list-content.directive';
import { SelectionListHeaderInstanceDirective as SelectionListHeaderInstanceDirective } from '../directives/selection-list-header-instance.directive';
import { SelectionListHeaderDirective } from '../directives/selection-list-header.directive';
import { SelectionListContentStubComponent } from '../testing/selection-list-content-stub.component';
import { SelectionListHeaderStubComponent } from '../testing/selection-list-header-stub.component';

import { SelectionListComponent } from './selection-list.component';


@Component({
  selector: 'app-selection-list-dummy',
  template: `
    <app-selection-list>
      <ng-template [appSelectionListHeader] let-option>
        <app-selection-list-header #headerRef [appSelectionListHeaderInstance]="headerRef"
          class="selection-list-header__ref">
          {{option}}
        </app-selection-list-header>
      </ng-template>
      <ng-template [appSelectionListContent] let-option>
        <app-selection-list-content #contentRef [appSelectionListContentInstance]="contentRef"
          class="selection-list-content__ref">
          {{option}}
        </app-selection-list-content>
      </ng-template> 
    </app-selection-list>
  `,
})
export class SelectionListDummyComponent {
  constructor() { }
}


fdescribe('SelectionListComponent', () => {
  let component: SelectionListComponent;
  let fixture: ComponentFixture<SelectionListComponent>;
  let dummyComponent: SelectionListDummyComponent;
  let dummyFixture: ComponentFixture<SelectionListDummyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionListComponent, SelectionListDummyComponent,
        SelectionListHeaderStubComponent, SelectionListContentStubComponent,
        SelectionListHeaderDirective, SelectionListContentDirective,
        SelectionListHeaderInstanceDirective, SelectionListContentInstanceDirective
      ]
    })
    .compileComponents();
  }));

  function setup(): void {
    fixture = TestBed.createComponent(SelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function setupDummy(): void {
    dummyFixture = TestBed.createComponent(SelectionListDummyComponent);
    dummyComponent = dummyFixture.componentInstance;
    dummyFixture.detectChanges();
  }

  it('should create', () => {
    setup();
    expect(component).toBeTruthy();
  });


  it('should select all content items if the header is selected', () => {
    const fakeHeaderSelectionList = {
      selectionChange: new EventEmitter<MatSelectionListChange>()
    } as MatSelectionList;
    const fakeContentSelectionList = {
      selectionChange: new EventEmitter<MatSelectionListChange>()
    } as MatSelectionList;
    const selectionChangeEvent = { options: [ { selected: true } ] } as MatSelectionListChange;
    setupDummy();
    const componentInstance: SelectionListComponent = dummyFixture.debugElement
      .query(By.directive(SelectionListComponent)).componentInstance;
    componentInstance.selectionListHeader.first.headerInstance.selectionList = fakeHeaderSelectionList;
    componentInstance.selectionListContent.first.contentInstance.selectionList = fakeContentSelectionList;
    spyOn(componentInstance.selectionListContent.first.contentInstance, 'selectAll').and.callFake(() => {});

    const headerSelectionList = componentInstance.selectionListHeader.first.headerInstance.selectionList;
    headerSelectionList.selectionChange.emit(selectionChangeEvent);
    dummyFixture.detectChanges();

    expect(componentInstance.selectionListContent.first.contentInstance.selectAll).toHaveBeenCalled();
  });

  it('should deselect all content items if the header is deselected', () => {
    const fakeHeaderSelectionList = {
      selectionChange: new EventEmitter<MatSelectionListChange>()
    } as MatSelectionList;
    const fakeContentSelectionList = {
      selectionChange: new EventEmitter<MatSelectionListChange>()
    } as MatSelectionList;
    const selectionChangeEvent = { options: [ { selected: true } ] } as MatSelectionListChange;
    setupDummy();
    const componentInstance: SelectionListComponent = dummyFixture.debugElement
      .query(By.directive(SelectionListComponent)).componentInstance;
      console.log(componentInstance.selectionListContent.first.contentInstance)
    componentInstance.selectionListHeader.first.headerInstance.selectionList = fakeHeaderSelectionList;
    componentInstance.selectionListContent.first.contentInstance.selectionList = fakeContentSelectionList;
    spyOn(componentInstance.selectionListContent.first.contentInstance, 'deselectAll').and.callFake(() => {});

    const headerSelectionList = componentInstance.selectionListHeader.first.headerInstance.selectionList;
    headerSelectionList.selectionChange.emit(selectionChangeEvent);
    dummyFixture.detectChanges();

    expect(componentInstance.selectionListContent.first.contentInstance.deselectAll).toHaveBeenCalled();
  });
});
