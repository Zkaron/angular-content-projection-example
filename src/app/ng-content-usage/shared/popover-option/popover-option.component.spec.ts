// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { Component, OnInit } from '@angular/core';

// import { PopoverOptionComponent } from './popover-option.component';
// import { By } from '@angular/platform-browser';


// @Component({
//   selector: 'app-popover-option-dummy',
//   template: `
//   <app-popover-option>My option</app-popover-option>
//   `
// })

// export class PopoverOptionDummyComponent implements OnInit {
//   constructor() { }

//   ngOnInit() { }
// }

// describe('PopoverOptionComponent', () => {
//   let dummyFixture: ComponentFixture<PopoverOptionDummyComponent>;
//   let dummyComponent: PopoverOptionDummyComponent;
//   let component: PopoverOptionComponent;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PopoverOptionComponent, PopoverOptionDummyComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     dummyFixture = TestBed.createComponent(PopoverOptionDummyComponent);
//     dummyComponent = dummyFixture.componentInstance;
//     component = dummyFixture.debugElement.query(By.directive(PopoverOptionComponent)).componentInstance;
//     dummyFixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should emit the content element when clicking the popover option', () => {
//     spyOn(component.optionSelected, 'emit');
//     spyOn(component, 'selected').and.callThrough();
//     const popoverEl: HTMLElement = dummyFixture.debugElement.query(By.css('.popover-option')).nativeElement;
//     const childEL = popoverEl.firstElementChild.textContent;
//     popoverEl.click();
//     runOnPushChangeDetection(dummyFixture);

//     expect(component.selected).toHaveBeenCalled();
//     expect(component.optionSelected.emit).toHaveBeenCalledWith(childEL);
//   });
// });
