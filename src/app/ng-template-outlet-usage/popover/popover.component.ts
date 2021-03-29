import { AfterContentInit, AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopoverItem } from '../models/popover-item';
import { PopoverItemDirective } from '../directives/popover-item.directive';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent<T> implements OnInit, AfterContentInit {
  @ContentChild(PopoverItemDirective) popoverItemRef: PopoverItemDirective<T>;
  @Input() popoverOptions: PopoverItem<T>[];
  @Output() itemSelected = new EventEmitter<PopoverItem<T>>();
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('popi', this.popoverItemRef);
  }

  selectedItem(event: PopoverItem<T>): void {
    this.itemSelected.emit(event);
    this.isOpen = false;
  }

  togglePopover(event: Event, state: boolean): void {
    event.stopPropagation();
    this.isOpen = state;
  }

}
