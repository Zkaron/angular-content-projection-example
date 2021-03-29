import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionAllComponent } from './selection-all.component';

describe('SelectionAllComponent', () => {
  let component: SelectionAllComponent;
  let fixture: ComponentFixture<SelectionAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
