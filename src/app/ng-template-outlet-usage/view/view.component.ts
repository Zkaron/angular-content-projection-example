import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { PopoverItem } from '../models/popover-item';
import { Shoe } from '../models/shoe';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  headers: string[] = [ 'Todo' ];
  headerOptions: PopoverItem<string>[] = [
    {
      item: 'Shoe type',
      action: 'view'
    }
  ];
  // columnHeaders: string[] = ['Shoe type', 'Price', 'Size', '']; // add empty one due to options popover
  shoes: Shoe[] = [
    {
      type: 'Boots', price: 1000, size: 26, stock: 1290
    }, {
      type: 'Clogs', price: 1200, size: 27.5, stock: 5000
    }, {
      type: 'Loafers', price: 900, size: 18, stock: 100
    }, {
      type: 'Moccasins', price: 700, size: 29, stock: 200
    }, {
      type: 'Sneakers', price: 1300, size: 28, stock: 369
    },
      ];
  contentOptions: PopoverItem<string>[] = [
    {
      item: 'View',
      action: 'view'
    },
    {
      item: 'Edit',
      action: 'view'
    },
    {
      item: 'Delete',
      action: 'view'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  toggleSelectionAll(event: MatSelectionListChange): void {
    console.log('selecting all', event);
  }

  changePopoverSelection(optionSelected: PopoverItem<any>): void {
    console.log('selected this option', optionSelected)
  }

}
