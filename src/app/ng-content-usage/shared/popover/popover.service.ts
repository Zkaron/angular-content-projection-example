import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopoverDirective } from './popover.directive';

@Injectable({
  providedIn: 'root'
})
export class PopoverService implements OnDestroy {
  private _popovers: PopoverDirective[] = [];
  private _popoverSubject = new BehaviorSubject<PopoverDirective[]>(this._popovers);
  popovers$ = this._popoverSubject.asObservable();

  constructor() { }

  addPopover(popover: PopoverDirective): void {
    this._popovers = [...this._popovers, popover];
    this._popoverSubject.next(this._popovers);
  }

  removePopover(popover: PopoverDirective): void {
    this._popovers = this._popovers.filter(_popover => popover !== popover);
    this._popoverSubject.next(this._popovers);
  }

  closeAll(opts?: { exceptions: PopoverDirective[] }): void {
    const popoversWithoutExceptions = this._popovers.filter(popover => ! opts.exceptions.find(exception => exception === popover));
    popoversWithoutExceptions.forEach(popover => popover.expanded = false);
    this._popovers = [...popoversWithoutExceptions, ...opts.exceptions];
  }

  ngOnDestroy(): void {
    this._popoverSubject.next(null);
    this._popoverSubject.complete();
  }
}
