import { PopoverAction } from './popover-action';

export interface PopoverItem<T> {
    icon?: string;
    item: T;
    action: PopoverAction;
}
