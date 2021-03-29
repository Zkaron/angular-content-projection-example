import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectionListContentComponent } from './selection-list-content.component';

describe('SelectionListContentComponent', () => {
  let component: SelectionListContentComponent<any>;
  let fixture: ComponentFixture<SelectionListContentComponent<any>>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
