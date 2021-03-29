import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OverlayModule} from '@angular/cdk/overlay';

import { NgTemplateOutletUsageRoutingModule } from './ng-template-outlet-usage-routing.module';
import { ViewComponent } from './view/view.component';
import { PopoverComponent } from './popover/popover.component';
import { SelectionListHeaderComponent } from './selection-list-header/selection-list-header.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { SelectionListContentComponent } from './selection-list-content/selection-list-content.component';
import { PopoverItemDirective } from './directives/popover-item.directive';
import { MatListModule } from '@angular/material/list';
import { SelectionListItemDirective } from './directives/selection-list-item.directive';
import { PopoverItemComponent } from './popover-item/popover-item.component';
import { SelectionListHeaderDirective } from './directives/selection-list-header.directive';
import { SelectionListContentDirective } from './directives/selection-list-content.directive';
import { SelectionListHeaderInstanceDirective } from './directives/selection-list-header-instance.directive';
import { SelectionListContentInstanceDirective } from './directives/selection-list-content-instance.directive';
import { SelectionListHeadingDirective } from './directives/selection-list-heading.directive';


@NgModule({
  declarations: [
    ViewComponent, PopoverComponent, SelectionListHeaderComponent, SelectionListComponent, SelectionListContentComponent,
    PopoverItemDirective, SelectionListItemDirective, PopoverItemComponent, SelectionListHeaderDirective, SelectionListContentDirective, SelectionListHeaderInstanceDirective, SelectionListContentInstanceDirective, SelectionListHeadingDirective
  ],
  imports: [
    CommonModule,
    NgTemplateOutletUsageRoutingModule,
    OverlayModule,
    MatListModule
  ],
})
export class NgTemplateOutletUsageModule { }
