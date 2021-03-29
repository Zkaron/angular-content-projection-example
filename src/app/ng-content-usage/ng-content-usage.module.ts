import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipExpansionDirective } from './tooltip-expansion.directive';
import { SharedModule } from './shared/shared.module';
import { MatListModule } from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NgContentUsageRoutingModule } from './ng-content-usage-routing.module';
import { TooltipOptionComponent } from './tooltip-option/tooltip-option.component';

@NgModule({
  declarations: [
    ViewComponent,
    ListComponent,
    ItemComponent,
    TooltipComponent,
    TooltipOptionComponent,
    TooltipDirective,
    TooltipExpansionDirective,
  ],
  imports: [
    CommonModule,
    MatListModule,
    ScrollingModule,
    SharedModule,
    NgContentUsageRoutingModule
  ]
})
export class NgContentUsageModule { }
