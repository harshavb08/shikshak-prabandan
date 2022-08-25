var options = {
    series: [{
        name: "Teachers",
        data: [356, 288, 125, 175, 171, 156, 214, 245, 270, 255, 262, 330]
    }],
    chart: {
        height: 300,
        type: 'bar',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false
        }
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
        offsetY: -10,
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
    }
};



var options4 = {
    series: [25, 53, 70],
    chart: {
        height: 350,
        type: 'radialBar',
    },
    colors: ['#003049', '#d62828', '#f77f00'],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function(w) {
                        return 250
                    }
                }
            }
        }
    },
    labels: ['Male', 'Female', 'Others'],
    legend: {
        show: true,
        position: 'bottom'
    },

};

var chart = new ApexCharts(document.querySelector("#activities-chart"), options);
chart.render();


var chart4 = new ApexCharts(document.querySelector("#this-year-chart"), options4);
chart4.render();