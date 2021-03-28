import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { PopoverService } from './popover.service';

/** Possible positions for a popover. */
export type PopoverPosition = 'left' | 'right';

@Directive({
  selector: '[appPopover]',
  exportAs: 'app-popover'
})
export class PopoverDirective implements OnInit, OnDestroy {
  private _position: PopoverPosition;
  private _expanded: boolean;
  private _insideClick: boolean;

  positionCoordX: number;
  positionCoordY: number;

  constructor(
    private el: ElementRef,
    private popoverService: PopoverService
  ) {}

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent): void {
    this._updatePosition();
    this.toggleTooltip();
    this._insideClick = true;
    event.stopPropagation(); // due it being inside a selectable element
    this.popoverService.closeAll({exceptions: [this]});
    this.handleWindowClick(event); // call manually the event that closes all active popovers
  }

  @HostListener('window:click', ['$event'])
  handleWindowClick(event: MouseEvent): void {
    if (! this._insideClick) {
      this._expanded = false;
    }
    this._insideClick = false;
  }

  @HostListener('window:scroll', ['$event'])
  handleWindowScroll(event: Event): void {
    if (this._expanded) {
      this._updatePosition();
    }
  }

  private _updatePosition(): void {
    const clientRect: DOMRect = this.el.nativeElement.getBoundingClientRect();
    this.positionCoordX = clientRect.right - 5;
    this.positionCoordY = clientRect.bottom - 5;
  }

  toggleTooltip(): void {
    this._expanded = ! this._expanded;
  }

  @Input('appTooltipExpand')
  set expanded(condition: boolean) {
    this._expanded = condition;
  }
  get expanded(): boolean {
    return this._expanded;
  }


  ngOnInit(): void {
    this.popoverService.addPopover(this);
  }

  ngOnDestroy(): void {
    this.popoverService.removePopover(this);
  }
}
