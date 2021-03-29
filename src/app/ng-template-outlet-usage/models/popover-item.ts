import { PopoverAction } from './popover-action';

export interface PopoverItem<T> {
    item: T;
    action: PopoverAction;
}
