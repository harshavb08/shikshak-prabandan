import React, { Component } from "react";
import Chart from "react-apexcharts";

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        colors: ['#d62828'],
        grid: {
          show: false,
        },

        plotOptions: {
          bar: {
            columnWidth: 60,
            dataLabels: {
              position: 'top'
            }
          },

        },
        xaxis: {
          categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
          labels: {
            style: {
              colors: '#000000'
            }
          }
        }
      },
      yaxis: {
        min: 0,
        max: 500,
        axisBorder: {
          show: true
        },
        labels: {
          style: {
            colors: '#000000'
          }
        }
      },
      dataLabels: {

        enabled: true,
        offsetY: 0,
        style: {
          colors: ['#000000'],

        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: 0,
        labels: {
          useSeriesColors: true
        },
        markers: {
          width: 10,
          height: 10,
        }
      },
      series: [
        {
          name: "Teachers",
          data: [356, 288, 125, 175, 171, 156, 214, 245, 270, 255, 262, 330]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="350"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
