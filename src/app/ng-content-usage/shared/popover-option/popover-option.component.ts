import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-popover-option',
  templateUrl: './popover-option.component.html',
  styleUrls: ['./popover-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverOptionComponent implements OnInit {
  @ViewChild('popoverOption') content: ElementRef<any>;
  @Output() optionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selected(event: Event): void {
    event.stopPropagation();
    this.optionSelected.emit(this.content.nativeElement.firstChild.textContent);
  }
}
