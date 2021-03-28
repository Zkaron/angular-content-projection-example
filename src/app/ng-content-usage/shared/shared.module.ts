import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { SelectionListContentComponent } from './selection-list-content/selection-list-content.component';
import { SelectionListHeaderComponent } from './selection-list-header/selection-list-header.component';
import { SelectionListOptionComponent } from './selection-list-option/selection-list-option.component';
import { MatListModule } from '@angular/material/list';
import { PopoverComponent } from './popover/popover.component';
import { PopoverDirective } from './popover/popover.directive';
import { PopoverExpansionDirective } from './popover/popover-expansion.directive';
import { PopoverOptionComponent } from './popover-option/popover-option.component';
import { SelectionAllComponent } from './selection-all/selection-all.component';



@NgModule({
  declarations: [
    SelectionListComponent,
    SelectionListContentComponent,
    SelectionListHeaderComponent,
    SelectionListOptionComponent,
    PopoverComponent,
    PopoverOptionComponent,
    PopoverDirective,
    PopoverExpansionDirective,
    SelectionAllComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
  ],
  exports: [
    SelectionListComponent,
    SelectionListContentComponent,
    SelectionListHeaderComponent,
    SelectionListOptionComponent,
    SelectionAllComponent,
    PopoverComponent,
    PopoverOptionComponent,
  ]
})
export class SharedModule { }
