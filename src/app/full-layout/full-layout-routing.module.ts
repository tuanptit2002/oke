import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullLayoutComponent} from "./full-layout.component";
import {CategoryModule} from "../category/category.module";

const routes: Routes = [
  {
    path:'',
    component: FullLayoutComponent,

    children: [
      {
        path: 'category',
        loadChildren: () => import('../category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'item',
        loadChildren: () => import('../item/item-module.module').then(m => m.ItemModuleModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home-module.module').then(m => m.HomeModuleModule)
      },
      {
        path: 'report',
        loadChildren: () => import('../report-chart/report-chart.module').then(m => m.ReportChartModule)
      },
      {
        path:'mail',
        loadChildren: () => import('../mail/mail-module.module').then(m => m.MailModuleModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
