import { Component, EventEmitter, Output } from "@angular/core";
import { PopoverItem } from "../models/popover-item";
import { PopoverItemComponent } from "../popover-item/popover-item.component";

@Component({
    selector: 'app-popover-item',
    template: `
      <div><ng-content></ng-content></div>
    `,
    providers: [
      { provide: PopoverItemComponent, useClass: PopoverItemStubComponent }
    ]
  })
  export class PopoverItemStubComponent {
    @Output() itemSelected = new EventEmitter<PopoverItem<any>>();
    constructor() { }
}