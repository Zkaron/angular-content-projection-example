import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { PopoverOptionComponent } from '../popover-option/popover-option.component';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-selection-list-option',
  templateUrl: './selection-list-option.component.html',
  styleUrls: ['./selection-list-option.component.scss'],
})
export class SelectionListOptionComponent implements OnInit, AfterContentInit {
  @ContentChild(PopoverComponent) popover!: PopoverComponent;
  @ContentChildren(PopoverOptionComponent) public popoverOptions: QueryList<PopoverOptionComponent>;
  @Input() displayPopover = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.popoverOptions && this.popover) {
      this.popoverOptions.forEach(option => {
        option.optionSelected
        .subscribe((selected: string) => {
          this.popover.optionSelected.emit(selected);
        });
      });
    }
  }
}
