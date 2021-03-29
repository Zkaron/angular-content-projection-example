import { Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { PopoverItemDirective } from '../directives/popover-item.directive';
import { SelectionListItemDirective } from '../directives/selection-list-item.directive';
import { PopoverItem } from '../models/popover-item';

@Component({
  selector: 'app-selection-list-header',
  templateUrl: './selection-list-header.component.html',
  styleUrls: ['./selection-list-header.component.scss']
})
export class SelectionListHeaderComponent<T> implements OnInit {
  @ViewChild(MatSelectionList) selectionList: MatSelectionList;
  @ContentChild(SelectionListItemDirective) itemsTemplateRef?: SelectionListItemDirective;
  @ContentChild(PopoverItemDirective) popoverItemRef?: PopoverItemDirective<any>;

  @Input() items: T[];
  @Input() popoverOptions: PopoverItem<any>[];
  @Output() selectionChange = new EventEmitter<MatSelectionListChange>();
  @Output() popoverOptionSelected = new EventEmitter<PopoverItem<any>>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem(item: PopoverItem<any>): void {
    this.popoverOptionSelected.emit(item);
  }

  changeSelection(event: MatSelectionListChange): void {
    this.selectionChange.emit(event);
  }

  selectAll(): void {
    this.selectionList.selectAll();
  }

  deselectAll(): void {
    this.selectionList.deselectAll();
  }

}
