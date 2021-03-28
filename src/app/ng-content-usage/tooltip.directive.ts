import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/** Possible positions for a tooltip. */
export type AppTooltipPosition = 'left' | 'right';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'app-tooltip'
})
export class TooltipDirective {
  private _position: AppTooltipPosition;
  private _expanded: boolean;
  private _insideClick: boolean;

  positionCoordX: number;
  positionCoordY: number;

  constructor(
    private el: ElementRef,
    // private tooltipService: TooltipService
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef,
  ) {}

  // ngOnInit(): void {
  //   this.tooltipService.addTooltip(this);
  // }

  // ngOnDestroy(): void {
  //   this.tooltipService.removeTooltip(this);
  // }

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent): void {
    event.preventDefault();
    this._updatePosition();
    this.toggleTooltip();
    this._insideClick = true;
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

  // ngAfterViewInit(): void {
  //   // const clientRect: DOMRect = this.el.nativeElement.getBoundingClientRect();
  //   // this._updatePosition();
  // }

  private _updatePosition() {
    const clientRect: DOMRect = this.el.nativeElement.getBoundingClientRect();
    // switch(this.position) {
    //   case 'left':
    //     this.positionCoordX = clientRect.left;
    //     this.positionCoordY = clientRect.bottom;
    //   break;
    //   case 'right':
    //     this.positionCoordX = clientRect.right - 5;
    //     this.positionCoordY = clientRect.bottom - 5;
    //   break;
    //   default:
        this.positionCoordX = clientRect.right - 5;
        this.positionCoordY = clientRect.bottom - 5;
      // break;
    // }
  }

  toggleTooltip(): void {
    this._expanded = ! this._expanded;
  }
  // @Input() set appTooltip(condition: boolean) {
  //   if (condition && ! this.hasView) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //     this.hasView = true;
  //   } else if (! condition && this.hasView) {
  //     this.viewContainer.clear();
  //     this.hasView = false;
  //   }
  // }

  // @Input('appTooltipPosition')
  // set position(position: AppTooltipPosition) {
  //   this._position = position;
  //   // this._updatePosition();
  // }
  // get position(): AppTooltipPosition {
  //   return this._position;
  // }

  @Input('appTooltipExpand')
  set expanded(condition: boolean) {
    this._expanded = condition;
  }
  get expanded(): boolean {
    return this._expanded;
  }
}
