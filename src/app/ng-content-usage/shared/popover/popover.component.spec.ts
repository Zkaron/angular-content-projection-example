// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

// import { PopoverComponent } from './popover.component';

// import { Component, OnInit } from '@angular/core';
// import { PopoverOptionComponent } from '../popover-option/popover-option.component';
// import { By } from '@angular/platform-browser';
// import { runOnPushChangeDetection } from 'src/app/core/test-utils/run-on-push-change-detection';
// import { PopoverListComponent } from '../popover-list/popover-list.component';

// @Component({
//   selector: 'app-popover-dummy',
//   template: `
//     <app-popover>
//       <!-- <app-popover-list> -->
//         <app-popover-option>Option 1</app-popover-option>
//         <app-popover-option>Option 2</app-popover-option>
//         <app-popover-option>Option 3</app-popover-option>
//       <!-- </app-popover-list> -->
//     </app-popover>
//   `
// })

// export class PopoverDummyComponent implements OnInit {
//   constructor() { }

//   ngOnInit() { }
// }

// describe('PopoverComponent', () => {
//   let dummyFixture: ComponentFixture<PopoverDummyComponent>;
//   let dummyComponent: PopoverDummyComponent;
//   let component: PopoverComponent;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PopoverComponent, PopoverDummyComponent, PopoverListComponent, PopoverOptionComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     dummyFixture = TestBed.createComponent(PopoverDummyComponent);
//     dummyComponent = dummyFixture.componentInstance;
//     component = dummyFixture.debugElement.query(By.directive(PopoverComponent)).componentInstance;
//   });

//   it('should create', () => {
//     dummyFixture.detectChanges();

//     expect(component).toBeTruthy();
//   });

//   it('[popoverList] should have value when the list is provided in the content', () => {
//     dummyFixture.detectChanges();

//     expect(component.popoverList).toBeTruthy();
//   });

//   it('should display the passed text', async () => {
//     const debugEl = dummyFixture.debugElement;
//     component.displayText = 'this is a beautiful text';
//     dummyFixture.detectChanges();

//     const displayedText = debugEl.query(By.css('.popover__header')).nativeElement.firstChild.textContent;

//     expect(component.displayText).toEqual(displayedText);
//   });

//   it('should display the passed icon', async () => {
//     const debugEl = dummyFixture.debugElement;
//     component.icon = 'arrow';
//     dummyFixture.detectChanges();

//     const iconEl: HTMLElement = debugEl.query(By.css('.popover__header')).nativeElement.firstElementChild;

//     expect(iconEl.classList.contains('fa-arrow')).toBeTrue();
//   });

//   it('should re-emit the popover-option selected event when triggered [first option]', async () => {
//     const debugEl = dummyFixture.debugElement;
//     spyOn(component.optionSelected, 'emit');

//     dummyFixture.detectChanges();
//     const popoverOptions: PopoverOptionComponent[] = debugEl.queryAll(By.directive(PopoverOptionComponent)).map(el => el.componentInstance);
//     const popoverOptionsEl: HTMLElement[] = debugEl.queryAll(By.directive(PopoverOptionComponent)).map(el => el.nativeElement);
//     const fakeEvent = { stopPropagation: () => {} } as any;
//     popoverOptions[0].selected(fakeEvent); // run the selected function of the first element to emit an event
//     await runOnPushChangeDetection(dummyFixture);
//     const actualOptionEmitted = popoverOptionsEl[0].firstChild.textContent;

//     expect(component.optionSelected.emit).toHaveBeenCalledWith(actualOptionEmitted);
//   });

//   it('should re-emit the popover-option selected event when triggered [last option]', async () => {
//     const debugEl = dummyFixture.debugElement;
//     spyOn(component.optionSelected, 'emit');

//     dummyFixture.detectChanges();
//     const popoverOptions: PopoverOptionComponent[] = debugEl.queryAll(By.directive(PopoverOptionComponent)).map(el => el.componentInstance);
//     const popoverOptionsEl: HTMLElement[] = debugEl.queryAll(By.directive(PopoverOptionComponent)).map(el => el.nativeElement);
//     const fakeEvent = { stopPropagation: () => {} } as any;
//     popoverOptions[2].selected(fakeEvent); // run the selected function of the first element to emit an event
//     await runOnPushChangeDetection(dummyFixture);
//     const actualOptionEmitted = popoverOptionsEl[2].firstChild.textContent;

//     expect(component.optionSelected.emit).toHaveBeenCalledWith(actualOptionEmitted);
//   });
// });
