import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { PopoverItemDirective } from '../directives/popover-item.directive';
import { SelectionListItemDirective } from '../directives/selection-list-item.directive';
import { PopoverItem } from '../models/popover-item';

@Component({
  selector: 'app-selection-list-header',
  templateUrl: './selection-list-header.component.html',
  styleUrls: ['./selection-list-header.component.scss']
})
export class SelectionListHeaderComponent<T> implements OnInit, AfterViewInit {
  @ViewChild(MatSelectionList) selectionList: MatSelectionList;
  @Input() items: T[];
  @Input() popoverOptions: PopoverItem<any>[];
  // @Input() itemsTemplate: TemplateRef<any>;
  @ContentChild(SelectionListItemDirective) itemsTemplateRef?: SelectionListItemDirective;
  @ContentChild(PopoverItemDirective) popoverItemRef?: PopoverItemDirective<any>;
  @Output() selectionChange = new EventEmitter<MatSelectionListChange>();
  @Output() popoverOptionSelected = new EventEmitter<PopoverItem<any>>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  selectedItem(item: PopoverItem<any>): void {
    console.log('header selected', item)
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
