import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopoverItemDirective } from '../directives/popover-item.directive';
import { PopoverItem } from '../models/popover-item';

@Component({
  selector: 'app-popover-item',
  templateUrl: './popover-item.component.html',
  styleUrls: ['./popover-item.component.scss']
})
export class PopoverItemComponent<T> implements OnInit {
  @ContentChild(PopoverItemDirective) popoverItemRef: PopoverItemDirective<T>;
  @Input() popoverItem: PopoverItem<T>;
  @Output() itemSelected = new EventEmitter<PopoverItem<T>>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(): void {
    this.itemSelected.emit(this.popoverItem);
  }
}
