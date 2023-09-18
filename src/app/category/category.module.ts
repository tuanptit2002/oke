import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {EditCategoryComponent} from './edit-category/edit-category.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryService} from "../service/categoryService";
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    EditCategoryComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    DeleteCategoryComponent,
    CategoryCreateComponent
  ],
  imports: [

    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [    {provide: CategoryService, useClass: CategoryService},
  ]
})
export class CategoryModule {
}
