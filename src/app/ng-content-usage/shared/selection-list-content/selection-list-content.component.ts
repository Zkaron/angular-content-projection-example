import { Component, ContentChild, OnInit } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-selection-list-content',
  templateUrl: './selection-list-content.component.html',
  styleUrls: ['./selection-list-content.component.scss']
})
export class SelectionListContentComponent implements OnInit {
  @ContentChild(MatSelectionList) listItems: MatSelectionList;

  isMoreThanOneItemSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  selectAll(): void {
    this.listItems.selectAll();
  }

  deselectAll(): void {
    this.listItems.deselectAll();
  }

}
