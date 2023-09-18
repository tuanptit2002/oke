import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeModuleRoutingModule} from './home-module-routing.module';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {DetailItemComponent} from './detail-item/detail-item.component';
import {FormsModule} from "@angular/forms";
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    DetailItemComponent,
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatLegacyFormFieldModule,
    MatDatepickerModule,
  ]
})
export class HomeModuleModule {
}
