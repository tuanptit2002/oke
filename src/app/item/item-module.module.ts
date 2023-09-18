import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemModuleRoutingModule } from './item-module-routing.module';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ListItemComponent } from './list-item/list-item.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacySelectModule} from "@angular/material/legacy-select";
import { EditItemComponent } from './edit-item/edit-item.component';


@NgModule({
  declarations: [
    ItemCreateComponent,
    ListItemComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    ItemModuleRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatLegacyFormFieldModule,
    MatLegacySelectModule
  ]
})
export class ItemModuleModule { }
