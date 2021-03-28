import { AfterContentInit, AfterViewInit, Component, ContentChild, OnInit } from '@angular/core';
import { SelectionAllComponent } from '../selection-all/selection-all.component';
import { SelectionListContentComponent } from '../selection-list-content/selection-list-content.component';
import { SelectionListHeaderComponent } from '../selection-list-header/selection-list-header.component';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit, AfterViewInit {
  @ContentChild(SelectionAllComponent) selectionAll: SelectionAllComponent;
  @ContentChild(SelectionListContentComponent) selectionListContent: SelectionListContentComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.selectionAll) {
      // this.selectionAll.displayPopover = this._checkIfPopoverShouldBeDisplayed();

      this.selectionAll.selectionAllToggled.subscribe(toggled => {
        toggled ? this.selectionListContent.selectAll() : this.selectionListContent.deselectAll();
      });

      // listen to the userItems changed event to detect if an option has been checked or unchecked
      this.selectionListContent.listItems.selectedOptions.changed
      .subscribe(() => {
        this.selectionAll.displayPopover = this._checkIfPopoverShouldBeDisplayed();
      });
    }
  }

  private _checkIfPopoverShouldBeDisplayed(): boolean {
    const option = this.selectionAll.option;
    return this._checkThereAreSelectedItems() && option.popoverOptions && option.popoverOptions.length > 0;
  }

  /**
   * Checks the userItems object to see if at least one item is checked
   */
  private _checkThereAreSelectedItems(): boolean {
    return this.selectionListContent.listItems.selectedOptions.selected.length > 0 ? true : false;
  }
}
