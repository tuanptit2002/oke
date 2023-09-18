import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailModuleRoutingModule } from './mail-module-routing.module';
import {MailComponent} from "./mail.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MailModuleRoutingModule
  ]
})
export class MailModuleModule { }
