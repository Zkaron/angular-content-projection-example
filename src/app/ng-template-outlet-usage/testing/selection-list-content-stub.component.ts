import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatSelectionListChange } from "@angular/material/list";
import { PopoverItem } from "../models/popover-item";

@Component({
    selector: 'app-selection-list-content',
    template: `<div></div>`,
  })
  export class SelectionListContentStubComponent {
    @Input() columnHeaders: string[];
    @Input() items: any[];
    @Input() popoverOptions: PopoverItem<any>[];
    @Output() selectionChange = new EventEmitter<MatSelectionListChange>();
    @Output() popoverOptionSelected = new EventEmitter<PopoverItem<any>>();

    constructor() { }

    selectAll(): void {}
    deselectAll(): void {}
}
