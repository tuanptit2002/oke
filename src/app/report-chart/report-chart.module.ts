import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CanvasJSAngularChartsModule} from '@canvasjs/angular-charts';
import {ReportChartRoutingModule} from './report-chart-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportChartRoutingModule,
    CanvasJSAngularChartsModule
  ]
})
export class ReportChartModule {
}
