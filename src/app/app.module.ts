import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {UserComponent} from './user/user.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatLegacyMenuModule} from "@angular/material/legacy-menu";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ReportChartComponent } from './report-chart/report-chart.component';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FullLayoutComponent,
    UserComponent,
    ReportChartComponent,
    MailComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatLegacyMenuModule,
        MatIconModule,
        MatSidenavModule,
        CanvasJSAngularChartsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
