// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { Component, OnInit } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { MatSelectionList } from '@angular/material/list';

// import { SelectionListContentComponent } from './selection-list-content.component';


// @Component({
//   selector: 'app-selection-list-content-dummy',
//   template: `
//     <app-selection-list-content>
//       <mat-selection-list></mat-selection-list>
//     </app-selection-list-content>
//   `
// })
// export class SelectionListContentDummyComponent implements OnInit {
//   constructor() { }

//   ngOnInit() { }
// }

// describe('SelectionListContentComponent', () => {
//   let dummyComponent: SelectionListContentDummyComponent;
//   let dummyFixture: ComponentFixture<SelectionListContentDummyComponent>;
//   let component: SelectionListContentComponent;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SelectionListContentComponent, SelectionListContentDummyComponent, MatSelectionList ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     dummyFixture = TestBed.createComponent(SelectionListContentDummyComponent);
//     dummyComponent = dummyFixture.componentInstance;
//     component = dummyFixture.debugElement.query(By.directive(SelectionListContentComponent)).componentInstance;
//     dummyFixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('[MatSelectionList] should have value if it contains a child MatSelectionList', () => {
//     expect(component.listItems).toBeTruthy();
//   });

//   it('should select all items in the MatSelectionList', () => {
//     spyOn(component.listItems, 'selectAll');

//     component.selectAll();

//     expect(component.listItems.selectAll).toHaveBeenCalled();
//   });

//   it('should deselect all items in the MatSelectionList', () => {
//     spyOn(component.listItems, 'deselectAll');

//     component.deselectAll();

//     expect(component.listItems.deselectAll).toHaveBeenCalled();
//   });
// });
