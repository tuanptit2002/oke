import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from "./category-list/category-list.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryDetailComponent} from "./category-detail/category-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path:'edit/:id',
    component: EditCategoryComponent
  },
  {
    path: 'delete',
    component: DeleteCategoryComponent
  },{
  path: 'create',
    component: CategoryCreateComponent
  },
  {
    path: 'detail/:id',
    component: CategoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
