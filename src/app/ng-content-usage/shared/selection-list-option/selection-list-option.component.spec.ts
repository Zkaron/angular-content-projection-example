// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// import { PopoverComponent } from '../popover/popover.component';

// import { Component, OnInit } from '@angular/core';
// import { SelectionListOptionComponent } from './selection-list-option.component';
// import { PopoverOptionComponent } from '../popover-option/popover-option.component';
// import { PopoverListComponent } from '../popover-list/popover-list.component';

// @Component({
//   selector: 'app-selection-list-option-dummy',
//   template: `
//     <app-selection-list-option>
//       <!-- <app-popover-list class="popover"> -->
//         <app-popover-option>To</app-popover-option>
//         <app-popover-option>Do</app-popover-option>
//         <app-popover-option>List</app-popover-option>
//       <!-- </app-popover-list> -->
//     </app-selection-list-option>
//   `
// })
// export class SelectionListOptionDummyComponent implements OnInit {
//   constructor() { }

//   ngOnInit() { }
// }

// describe('SelectionListOptionComponent', () => {
//   let component: SelectionListOptionComponent;
//   let fixture: ComponentFixture<SelectionListOptionComponent>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SelectionListOptionComponent, PopoverComponent, SelectionListOptionDummyComponent, PopoverListComponent, PopoverOptionComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SelectionListOptionComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create', () => {
//     fixture.detectChanges();

//     expect(component).toBeTruthy();
//   });

//   it('should display the popover by default', () => {
//     const debugEl = fixture.debugElement;
//     const displayClass = 'selection-list-option__actions-active';
//     fixture.detectChanges();

//     const popoverEl: HTMLElement = debugEl.query(By.directive(PopoverComponent)).nativeElement;

//     expect(popoverEl.classList.contains(displayClass)).toBeTrue();
//   });

//   it('should display the popover when displayPopover is true', () => {
//     const debugEl = fixture.debugElement;
//     const displayClass = 'selection-list-option__actions-active';
//     component.displayPopover = true;
//     fixture.detectChanges();

//     const popoverEl = debugEl.query(By.directive(PopoverComponent)).nativeElement;

//     expect(popoverEl.classList.contains(displayClass)).toBeTrue();
//   });

//   it('should hide the popover when displayPopover is false', () => {
//     const debugEl = fixture.debugElement;
//     const displayClass = 'selection-list-option__actions-active';
//     component.displayPopover = false;
//     fixture.detectChanges();

//     const popoverEl = debugEl.query(By.directive(PopoverComponent)).nativeElement;

//     expect(popoverEl.classList.contains(displayClass)).toBeFalse();
//   });

//   it('[popover] should have a value if there are options in the template content', () => {
//     const dummyFixture = TestBed.createComponent(SelectionListOptionDummyComponent);
//     const componentToTest: SelectionListOptionComponent = dummyFixture.debugElement
//       .query(By.directive(SelectionListOptionComponent)).componentInstance;

//     dummyFixture.detectChanges();

//     expect(componentToTest.popover).toBeTruthy();
//   });
// });
