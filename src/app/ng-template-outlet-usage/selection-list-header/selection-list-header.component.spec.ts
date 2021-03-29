import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectionListHeaderComponent } from './selection-list-header.component';

describe('SelectionListHeaderComponent', () => {
  let component: SelectionListHeaderComponent<any>;
  let fixture: ComponentFixture<SelectionListHeaderComponent<any>>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
