import { Component, Input, OnInit } from '@angular/core';
import { AppTooltipPosition } from '../tooltip.directive';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() position: AppTooltipPosition;
  displayOptions: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
