import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss']
})
export class StatisticsComponent implements OnInit {

  chart = [];

  constructor() { }

  ngOnInit(): void {
    this.createTweoBarChart();
    this.createLineStackedChart();
  }

  createTweoBarChart() {
    let data_tb = {
      labels: this.range(2011, 2016, 1),
      datasets: [
          {
          label: "Statistic 02",
          backgroundColor: "#ffdc1b",
          borderSkipped: "bottom",
          data: [43,47,38,30,47,39]
      }, {
          label: "Statistic 01",
          backgroundColor: "#ff5e3a",
          borderSkipped: 'bottom',
          borderWidth: 0,
          data: [36,30,45,50,39,41]
      }]
    };
    this.chart = new Chart('two-bar-chart-canvas', {
      type: 'bar',
      data: data_tb,
      options: {
        legend: {
            display: false
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
            barPercentage:0.7,
            gridLines: {
              display: false
            },
            ticks: {
              fontColor: '#888da8'
            }
          }],
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero:true,
              fontColor: '#888da8'
            }
          }]
        }
      }
    });
  }

  createLineStackedChart() {
    let data_ls = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: " - Favorites",
          backgroundColor: "rgba(57,169,255,0.35)",
          borderColor: "#38a9ff",
          borderWidth: 4,
          pointBorderColor: "#38a9ff",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 4,
          pointRadius: 6,
          pointHoverRadius: 8,
          data: [98,42,38,57,82,41,36,30,45,62,64,80]
        },
        {
          label: " - Visitors",
          backgroundColor: "rgba(8,221,123,0.2)",
          borderColor: "#08ddc1",
          borderWidth: 4,
          pointBorderColor: "#08ddc1",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 4,
          pointRadius: 6,
          pointHoverRadius: 8,
          data: [78,101,80,87,120,105,110,76,101,96,100,135]
        }
      ]
    };
    this.chart = new Chart('line-stacked-chart-canvas', {
      type: 'line',
      data: data_ls,
      options: {
        legend: {
          display: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              color: "#f0f4f9"
            },
            ticks: {
              fontColor: '#888da8'
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero:true,
              fontColor: '#888da8'
            }
          }]
        }
      }
    });
  }

  /*
  *Helpers Functions
  */
  // Numbers with zeros
  private pad(d) {
    return (d < 10) ? '0' + d : d;
  }

  // Generate range array
  private range(start, stop, step){
    var a=[this.pad(start)], b=start;
    while(b<stop){b+=step;a.push(this.pad(b))}
    return a;
  }

}
