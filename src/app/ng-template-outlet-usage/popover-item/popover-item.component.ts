import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopoverItem } from '../models/popover-item';

@Component({
  selector: 'app-popover-item',
  templateUrl: './popover-item.component.html',
  styleUrls: ['./popover-item.component.scss']
})
export class PopoverItemComponent<T> implements OnInit, AfterViewInit {
  @Input() item: PopoverItem<T>;
  @Output() itemSelected = new EventEmitter<PopoverItem<T>>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(): void {
    this.itemSelected.emit(this.item);
  }

  ngAfterViewInit(): void {
    // if (! this.item) {
    //   console.log(this.itemDirective)
    //   this.item = this.itemDirective.el.nativeElement.innerHtml;
    // }
  }

}
