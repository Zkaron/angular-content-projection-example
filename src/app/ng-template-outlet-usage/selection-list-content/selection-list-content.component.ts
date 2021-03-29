import { Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { PopoverItem } from '../models/popover-item';
import { PopoverItemComponent } from '../popover-item/popover-item.component';
import { SelectionListHeadingDirective } from '../selection-list-heading.directive';
import { SelectionListItemDirective } from '../selection-list-item.directive';

@Component({
  selector: 'app-selection-list-content',
  templateUrl: './selection-list-content.component.html',
  styleUrls: ['./selection-list-content.component.scss']
})
export class SelectionListContentComponent<T> implements OnInit {
  @ViewChild(MatSelectionList) selectionList: MatSelectionList;
  @Input() columnHeaders: string[];
  @Input() items: T[];
  @Input() popoverOptions: PopoverItem<any>[];
  // @Input() itemsTemplate: TemplateRef<any>;
  @ContentChild(SelectionListItemDirective) itemsTemplateRef?: SelectionListItemDirective;
  @ContentChild(SelectionListHeadingDirective) headingTemplateRef?: SelectionListHeadingDirective;
  @Output() selectionChange = new EventEmitter<MatSelectionListChange>();
  @Output() popoverOptionSelected = new EventEmitter<PopoverItem<any>>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem(item: PopoverItem<any>): void {
    console.log('content selected', item)
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