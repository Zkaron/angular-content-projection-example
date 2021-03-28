import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  title = 'ContentProjection';
  items = [
    'uno', 'dos', 'tres', 'cuatro', 'cinco',
    'uno', 'dos', 'tres', 'cuatro', 'cinco',
    'uno', 'dos', 'tres', 'cuatro', 'cinco',
    'uno con nombre muy extenso', 'dos', 'tres', 'cuatro', 'cinco',
    'uno', 'dos', 'tres', 'cuatro', 'cinco',
    'uno', 'dos', 'tres', 'cuatro', 'cinco',
    'uno', 'dos', 'tres', 'cuatro', 'cinco',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
