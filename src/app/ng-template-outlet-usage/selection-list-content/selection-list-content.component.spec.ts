import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionListContentComponent } from './selection-list-content.component';

describe('SelectionListContentComponent', () => {
  let component: SelectionListContentComponent;
  let fixture: ComponentFixture<SelectionListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionListContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
