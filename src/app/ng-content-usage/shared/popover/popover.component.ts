import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input, AfterContentInit, ContentChild, ContentChildren, QueryList, forwardRef } from '@angular/core';

import { PopoverOptionComponent } from '../popover-option/popover-option.component';
import { PopoverPosition } from './popover.directive';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent implements OnInit, AfterContentInit {
  @ContentChildren(PopoverOptionComponent, { descendants: true }) popoverOptions: QueryList<PopoverOptionComponent>;
  @Input() position: PopoverPosition;
  @Output() optionSelected = new EventEmitter<string>();

  displayOptions: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.popoverOptions) {
      this.popoverOptions.forEach(option => {
        option.optionSelected
        .subscribe((selected: string) => {
          this.optionSelected.emit(selected);
        });
      });
    }
  }
}
