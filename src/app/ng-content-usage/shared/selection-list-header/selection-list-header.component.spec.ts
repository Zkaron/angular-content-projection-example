// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { Component, OnInit } from '@angular/core';
// import { MatListModule } from '@angular/material/list';
// import { MatSelectionListHarness } from '@angular/material/list/testing';
// import { HarnessLoader } from '@angular/cdk/testing';
// import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
// import { By } from '@angular/platform-browser';

// import { SelectionListHeaderComponent } from './selection-list-header.component';
// import { SelectionListOptionComponent } from '../selection-list-option/selection-list-option.component';

// @Component({
//   selector: 'app-selection-list-header-dummy',
//   template: `
//     <app-selection-list-header>
//       <app-selection-list-option><p>Mine Option</p></app-selection-list-option>
//     </app-selection-list-header>
//   `
// })

// export class SelectionListHeaderDummyComponent implements OnInit {
//   constructor() { }

//   ngOnInit() { }
// }

// describe('SelectionListHeaderComponent', () => {
//   let dummyComponent: SelectionListHeaderDummyComponent;
//   let dummyFixture: ComponentFixture<SelectionListHeaderDummyComponent>;
//   let component: SelectionListHeaderComponent;
//   let loader: HarnessLoader;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SelectionListHeaderComponent, SelectionListHeaderDummyComponent, SelectionListOptionComponent ],
//       imports: [ MatListModule ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     dummyFixture = TestBed.createComponent(SelectionListHeaderDummyComponent);
//     loader = TestbedHarnessEnvironment.loader(dummyFixture);
//     dummyComponent = dummyFixture.componentInstance;
//     component = dummyFixture.debugElement.query(By.directive(SelectionListHeaderComponent)).componentInstance;
//     dummyFixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('[listHeader] should have a value', () => {
//     expect(component.listHeader).toBeTruthy();
//   });

//   it('[option] should have a value when a SelectionListOption content is set', () => {
//     expect(component.option).toBeTruthy();
//   });

//   it('should emit selectionAllToggled with true when selecting an item', async () => {
//     spyOn(component, 'toggleSelectionAll').and.callThrough();
//     spyOn(component.selectionAllToggled, 'emit');

//     const matSelectionList = await loader.getHarness(MatSelectionListHarness);
//     const items = await matSelectionList.getItems();
//     const selectedItem = items[0];
//     await selectedItem.select();

//     expect(component.toggleSelectionAll).toHaveBeenCalled();
//     expect(component.selectionAllToggled.emit).toHaveBeenCalledWith(true);
//   });

//   it('should emit selectionAllToggled with false when deselecting an item', async () => {
//     spyOn(component, 'toggleSelectionAll').and.callThrough();
//     spyOn(component.selectionAllToggled, 'emit');

//     const matSelectionList = await loader.getHarness(MatSelectionListHarness);
//     const items = await matSelectionList.getItems();
//     const selectedItem = items[0];
//     await selectedItem.select();
//     await selectedItem.deselect();

//     expect(component.toggleSelectionAll).toHaveBeenCalled();
//     expect(component.toggleSelectionAll).toHaveBeenCalledTimes(2);
//     expect(component.selectionAllToggled.emit).toHaveBeenCalledWith(false);
//   });
// });
