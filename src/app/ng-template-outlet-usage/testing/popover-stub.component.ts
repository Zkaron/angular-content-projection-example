import { Component, EventEmitter, Input, Output, TemplateRef } from "@angular/core";
import { PopoverItem } from "../models/popover-item";
import { PopoverComponent } from "../popover/popover.component";

@Component({
    selector: 'app-popover',
    template: `<div></div>`,
    providers: [{ provide: PopoverComponent, useClass: PopoverStubComponent }]
  })
  export class PopoverStubComponent {
    @Input() templateRef?: TemplateRef<any>;
    @Input() popoverOptions: PopoverItem<any>[];
    @Output() itemSelected = new EventEmitter<PopoverItem<any>>();
    constructor() { }
}