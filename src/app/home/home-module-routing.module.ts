import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {DetailItemComponent} from "./detail-item/detail-item.component";

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'detail/:id',
    component:DetailItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
