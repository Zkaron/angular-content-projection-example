import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionListHeaderComponent } from './selection-list-header.component';

describe('SelectionListHeaderComponent', () => {
  let component: SelectionListHeaderComponent;
  let fixture: ComponentFixture<SelectionListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
