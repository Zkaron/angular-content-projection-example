import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { SelectionListOptionComponent } from '../selection-list-option/selection-list-option.component';

@Component({
  selector: 'app-selection-all',
  templateUrl: './selection-all.component.html',
  styleUrls: ['./selection-all.component.scss']
})
export class SelectionAllComponent implements OnInit {
  @ViewChild(SelectionListOptionComponent) option: SelectionListOptionComponent;
  @Output() selectionAllToggled = new EventEmitter<boolean>();
  
  @Input() displayPopover: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelectionAll(selected: MatSelectionListChange): void {
    this.selectionAllToggled.emit(selected.options[0].selected);
  }
}
