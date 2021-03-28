import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'ng-content',
    loadChildren: () => import('./ng-content-usage/ng-content-usage.module').then(m => m.NgContentUsageModule)
  },
  {
    path: 'ng-template-outlet',
    loadChildren: () => import('./ng-template-outlet-usage/ng-template-outlet-usage.module').then(m => m.NgTemplateOutletUsageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
