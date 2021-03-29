import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TooltipDirective } from './tooltip.directive';

@Injectable({
  providedIn: 'root'
})
export class TooltipService implements OnDestroy {
  private _tooltips: TooltipDirective[] = [];
  private _tooltipSubject = new BehaviorSubject<TooltipDirective[]>(this._tooltips);
  tooltips$ = this._tooltipSubject.asObservable();

  constructor() { }

  addTooltip(tooltip: TooltipDirective): void {
    const updatedTooltips = [...this._tooltips, tooltip];
    this._tooltipSubject.next(updatedTooltips);
  }

  removeTooltip(tooltip: TooltipDirective): void {
    const updatedTooltips = this._tooltips.filter(_tooltip => tooltip !== tooltip);
    this._tooltipSubject.next(updatedTooltips);
  }

  closeAll(): void {
    this._tooltips.forEach(tooltip => tooltip.expanded = false);
  }

  ngOnDestroy(): void {
    this._tooltipSubject.next(null);
    this._tooltipSubject.complete();
  }
}
