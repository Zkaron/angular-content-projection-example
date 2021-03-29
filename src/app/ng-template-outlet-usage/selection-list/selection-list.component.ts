import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, OnDestroy, OnInit, Output, QueryList } from '@angular/core';

import { MatSelectionListChange } from '@angular/material/list';
import { SubSink } from 'subsink';

import { PopoverItem } from '../models/popover-item';
import { SelectionListContentInstanceDirective } from '../directives/selection-list-content-instance.directive';
import { SelectionListContentDirective } from '../directives/selection-list-content.directive';
import { SelectionListHeaderInstanceDirective } from '../directives/selection-list-header-instance.directive';
import { SelectionListHeaderDirective } from '../directives/selection-list-header.directive';
import { SelectionListContentComponent } from '../selection-list-content/selection-list-content.component';
import { SelectionListHeaderComponent } from '../selection-list-header/selection-list-header.component';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChild(SelectionListHeaderDirective) headerRef?: SelectionListHeaderDirective;
  @ContentChild(SelectionListContentDirective) contentRef?: SelectionListContentDirective;
  @ContentChildren(SelectionListHeaderInstanceDirective, { descendants: true }) selectionListHeader: QueryList<SelectionListHeaderInstanceDirective>;
  @ContentChildren(SelectionListContentInstanceDirective, { descendants: true }) selectionListContent: QueryList<SelectionListContentInstanceDirective>;

  subscriptions = new SubSink();

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: manage subscriptions, if easy to create memory leaks the way it is now
  ngAfterContentInit(): void {
    this.subscriptions.sink = this.selectionListHeader.changes.subscribe(headerChanges => {      
      const component = this._getSelectionListHeaderComponent();
      if (!!component) {
        this.subscriptions.sink = component.selectionChange.subscribe((change: MatSelectionListChange) => {
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
      headerComponent = header.headerInstance;
      return !!headerComponent;
    });

    return headerComponent;
  }

  private _getSelectionListContentComponent(): SelectionListContentComponent<any> {
    let contentComponent: SelectionListContentComponent<any> = null;

    this.selectionListContent.toArray().some(content => {
      contentComponent = content.contentInstance;
      return !!contentComponent;
    });

    return contentComponent;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
