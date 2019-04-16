(function($) {
  "use strict"; // Start of use strict
    var ctx = $('#myChart');

    var config = {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Dollar',
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
                label: 'Euro',
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
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    type: 'time',
                    unit:'day',
                    step:5,
                    ticks: {
                        source: 'data',
                        autoSkip: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: false,
                        labelString: 'Closing price ($)'
                    },
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            tooltips: {
                intersect: false,
                mode: 'index',
            }
        }
    };

    var myChart = new Chart(ctx, config);

})(jQuery); // End of use strict
