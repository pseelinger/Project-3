
//loadDataTable
//Parse writeHTMLTable
//    for htmltable +="" + jdfkjsdf + ""
//Run dataTables()
var nutrients = [];
var grains = 0;
var veggies = 0;
var fruits = 0;
var milk = 0;
var protein = 0;
var calories = 0;

$(document).ready(function() {
    $('#food-data').DataTable( {
        "ajax": 'data.txt'
    } );
} );

var isClicked = false;

$(document).ready(function() {
    var table = $('#food-data').DataTable();
    
       $('#food-data tbody').on('click', 'tr', function(){
      nutrients = table.row( this ).data();
      console.log(nutrients)
    });
    
    
});

function checkClick(){
  if (isClicked) {
    grains = grains + Number(nutrients[2]);
    veggies = veggies + Number(nutrients[3]);
    fruits = fruits + Number(nutrients[4]);
    milk = milk + Number(nutrients[5]);
    protein = protein + Number(nutrients[6]) + Number(nutrients[7]);
    calories =  calories + Number(nutrients[12]);
    gauges();
  }
}


function gauges() {

$(function () {

    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The calories gauge
    
    $('#calories-gauge').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 2000,
            title: {
                text: 'Calories'
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Calories',
            data: [calories],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">Total</span></div>'
            },
            tooltip: {
                valueSuffix: ''
            }
        }]

    }));
    
    //The grains gauge
    $('#grains-gauge').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 11,
            title: {
                text: 'Grains'
            }
        },

        series: [{
            name: 'Grains',
            data: [grains],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">servings</span></div>'
            },
            tooltip: {
                valueSuffix: 'servings'
            }
        }]

    }));

    // The veggies gauge
    $('#veggies-gauge').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 5,
            title: {
                text: 'Vegetables'
            }
        },

        series: [{
            name: 'Vegetables',
            data: [veggies],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">servings</span></div>'
            },
            tooltip: {
                valueSuffix: 'servings'
            }
        }]

    }));
    
    // The fruits gauge
    $('#fruits-gauge').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 4,
            title: {
                text: 'Fruits'
            }
        },

        series: [{
            name: 'Fruits',
            data: [fruits],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">servings</span></div>'
            },
            tooltip: {
                valueSuffix: 'servings'
            }
        }]

    }));
    
    // The milk gauge
    $('#milk-gauge').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 5,
            title: {
                text: 'Milk'
            }
        },

        series: [{
            name: 'Milk',
            data: [milk],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">servings</span></div>'
            },
            tooltip: {
                valueSuffix: 'servings'
            }
        }]

    }));
    
    // The protein gauge
    $('#protein-gauge').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 5,
            title: {
                text: 'Protein'
            }
        },

        series: [{
            name: 'Protein',
            data: [protein],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">servings</span></div>'
            },
            tooltip: {
                valueSuffix: 'servings'
            }
        }]

    }));

})};

gauges();
$('#food-data tbody').click(function(event){
  event.preventDefault();
  console.log("Table clicked");
  isClicked = true;
  checkClick();                    
})

