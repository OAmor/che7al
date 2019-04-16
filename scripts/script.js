(function($) {
  "use strict"; // Start of use strict

    var ctx = $('#myChart');

    var config = {
        type: 'bar',
        bounds:'ticks',
        data: {
            datasets: [{
                label: 'Buy Rate',
                data: [{x:'2019-04-15',y:10},
                    {x:'2019-04-16',y:13},
                    {x:'2019-04-18',y:11},
                    {x:'2019-04-20',y:10},
                    {x:'2019-04-25',y:5},
                    {x:'2019-05-03',y:13}],
                type: 'line',
                pointRadius: 0,
                fill: true,
                lineTension: 0,
                borderWidth: 2,
                backgroundColor:'#fee1e8',
                borderColor:'#f863d9'
            },{
                label: 'Sell Rate',
                data: [{x:'2019-04-15',y:20},
                    {x:'2019-04-16',y:15},
                    {x:'2019-04-18',y:11},
                    {x:'2019-04-20',y:13},
                    {x:'2019-04-25',y:21},
                    {x:'2019-05-03',y:13}],
                type: 'line',
                pointRadius: 0,
                fill: true,
                lineTension: 0,
                borderWidth: 2,
                backgroundColor:'#fef5ea',
                borderColor:'#fabe70'
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 10
                }
            },
            legend:{
                display:false
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    },
                    type: 'time',
                    distribution: 'linear',
                    unit:'day',
                    minUnit:'hour',
                    ticks: {
                        source: 'data',
                        autoSkip: false,
                        padding: 10,
                        beginAtZero:true,
                    },
                    bounds: "ticks"
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display:false
                    },
                    scaleLabel: {
                        display: false,
                    },
                    ticks: {
                        display:false,
                    }
                }]
            },
            tooltips: {
                enabled: true,
                intersect: false,
                callbacks: {
                    title: function(tooltipItem, data) {
                        return ''
                    },
                    label: function(tooltipItem, data) {
                        var title = data['datasets'][tooltipItem['datasetIndex']]['label'],
                            value = data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']].y;
                        //return data['datasets'][0]['data'][tooltipItem['index']].y;
                        return title + ': '+value+' Dzd';
                    }
                    
                },
                backgroundColor: '#d6fedc',
                bodyFontColor: '#000',
                bodyFontSize: 14,
                bodyFontWeight: 'bold',
                displayColors: false
            },
        }
    };

    var myChart = new Chart(ctx, config);


    /* Handel Scale Changes*/
    $('.chart-scales .page-item').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        myChart.options.scales.xAxes[0].time.unit = $(this).data('val');
        myChart.update();
    })

})(jQuery); // End of use strict
