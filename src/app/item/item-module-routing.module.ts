import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListItemComponent} from "./list-item/list-item.component";
import {ItemCreateComponent} from "./item-create/item-create.component";
import {EditItemComponent} from "./edit-item/edit-item.component";

const routes: Routes = [
  {
    path:'',
    component: ListItemComponent
  },
  {
    path:'create',
    component:ItemCreateComponent
  },
  {
    path:'edit/:id',
    component:EditItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemModuleRoutingModule { }
