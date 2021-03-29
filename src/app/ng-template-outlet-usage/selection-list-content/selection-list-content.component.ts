import { Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { PopoverItem } from '../models/popover-item';
import { SelectionListHeadingDirective } from '../directives/selection-list-heading.directive';
import { SelectionListItemDirective } from '../directives/selection-list-item.directive';
import { PopoverItemDirective } from '../directives/popover-item.directive';

@Component({
  selector: 'app-selection-list-content',
  templateUrl: './selection-list-content.component.html',
  styleUrls: ['./selection-list-content.component.scss']
})
export class SelectionListContentComponent<T> implements OnInit {
  @ViewChild(MatSelectionList) selectionList: MatSelectionList;
  @ContentChild(SelectionListItemDirective) itemsTemplateRef?: SelectionListItemDirective;
  @ContentChild(SelectionListHeadingDirective) headingTemplateRef?: SelectionListHeadingDirective;
  @ContentChild(PopoverItemDirective) popoverItemRef: PopoverItemDirective<T>;
  @Input() columnHeaders: string[];
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
    this.selectionList.selectionChange.emit(
      new MatSelectionListChange(this.selectionList, null, this.selectionList.options.toArray())
    );
  }

  deselectAll(): void {
    this.selectionList.deselectAll();
    this.selectionList.selectionChange.emit(
      new MatSelectionListChange(this.selectionList, null, this.selectionList.options.toArray())
    );
  }

}
