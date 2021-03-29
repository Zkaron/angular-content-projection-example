import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, OnInit, Output, QueryList } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { PopoverItem } from '../models/popover-item';
import { SelectionListContentElementDirective } from '../directives/selection-list-content-element.directive';
import { SelectionListContentDirective } from '../directives/selection-list-content.directive';
import { SelectionListHeaderElementDirective } from '../directives/selection-list-header-element.directive';
import { SelectionListHeaderDirective } from '../directives/selection-list-header.directive';
import { SelectionListContentComponent } from '../selection-list-content/selection-list-content.component';
import { SelectionListHeaderComponent } from '../selection-list-header/selection-list-header.component';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit, AfterContentInit {
  @ContentChild(SelectionListHeaderDirective) headerRef?: SelectionListHeaderDirective;
  @ContentChild(SelectionListContentDirective) contentRef?: SelectionListContentDirective;
  @ContentChildren(SelectionListHeaderElementDirective, { descendants: true }) selectionListHeader: QueryList<SelectionListHeaderElementDirective>;
  @ContentChildren(SelectionListContentElementDirective, { descendants: true }) selectionListContent: QueryList<SelectionListContentElementDirective>;

  @Output() popoverItemSelected = new EventEmitter<PopoverItem<any>>();
  @Output() selectionChange = new EventEmitter<MatSelectionListChange>();

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: manage subscriptions, if easy to create memory leaks the way it is now
  ngAfterContentInit(): void {
    this.selectionListHeader.changes.subscribe(headerChanges => {      
      console.log('headerChanges', headerChanges)
      const component = this._getSelectionListHeaderComponent();
      if (!!component) {
        component.selectionChange.subscribe((change: MatSelectionListChange) => {
          const contentComponent = this._getSelectionListContentComponent();
          if (!!contentComponent) {
            if (!! change.options[0].selected) {
              contentComponent.selectAll();
            } else {
              contentComponent.deselectAll();
            }
          }
        });
      }
    });
  }

  private _getSelectionListHeaderComponent(): SelectionListHeaderComponent<any> {
    let headerComponent: SelectionListHeaderComponent<any> = null;

    this.selectionListHeader.toArray().some(header => {
      headerComponent = header.headerElement;
      return !!headerComponent;
    });

    return headerComponent;
  }

  private _getSelectionListContentComponent(): SelectionListContentComponent<any> {
    let contentComponent: SelectionListContentComponent<any> = null;

    this.selectionListContent.toArray().some(content => {
      contentComponent = content.contentElement;
      return !!contentComponent;
    });

    return contentComponent;
  }

  selectPopover(event: PopoverItem<any>): void {
    console.log('evento', event);
  }

  changeSelection(event: MatSelectionListChange) {
    console.log('change', event);
  }

}
