import {Component, OnDestroy, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {ReportService} from "../service/report.service";

@Component({
  selector: 'app-report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.css']
})
export class ReportChartComponent implements OnInit, OnDestroy {
  constructor(private reportService: ReportService) {

  }

  private chart: any;
  labels: string[];
  dataPrice: number[];

  ngOnInit() {

    this.createChart();
  }

  createChart() {
    this.reportService.report().subscribe(it => {
      console.log(it, "data ne");
      this.labels = it.map((item: any) => item.date.toString())
      this.dataPrice = it.map((item: any) => item.price_data);
      console.log("day nhe 1--------", this.labels);
      console.log("day nhe 2--------", this.dataPrice);
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'Sample Data',
            data: this.dataPrice,
            backgroundColor: 'rgba(75, 100, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })

    this.chart.destroy();

  }

  ngOnDestroy() {
    // Unsubscribe from any active subscriptions to prevent memory leaks
    // Destroy the chart when the component is destroyed

  }

  refreshData() {
    this.reportService.refresh().subscribe(() => {
      this.createChart();
    });
  }

}
