var nutrients = [];
var grains = 0;
var veggies = 0;
var fruits = 0;
var milk = 0;
var protein = 0;
var calories = 0;

var date = [];
var cals = [];
var carbs = [];
var pros = [];
var fats = [];

$(document).ready(function() {
    $('#food-data').DataTable( {
        responsive: true,
        "ajax": 'data.txt'
    } );
} );
loadData();
barGraph();
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
    appendFoods();
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
            max: 6,
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
                       '<span style="font-size:12px;color:silver">ounces</span></div>'
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
            max: 3,
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
                       '<span style="font-size:12px;color:silver">cups</span></div>'
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
            max: 2,
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
                       '<span style="font-size:12px;color:silver">cups</span></div>'
            },
            tooltip: {
                valueSuffix: 'cups'
            }
        }]

    }));
    
    // The milk gauge
    $('#milk-gauge').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 3,
            title: {
                text: 'Dairy'
            }
        },

        series: [{
            name: 'Dairy',
            data: [milk],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">cups</span></div>'
            },
            tooltip: {
                valueSuffix: 'cups'
            }
        }]

    }));
    
    // The protein gauge
    $('#protein-gauge').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 6,
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
                       '<span style="font-size:12px;color:silver">ounces</span></div>'
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



function loadData(){
    
   $.ajax({
    type: "GET",
    url: "nutrients.xml",
    dataType: "xml",
    success: function(data){
        parseData(data);
    }
   });
}

function parseData(data){
    
    console.log(data);
    var i = 0;
    $(data).find('year').each(function(){
        var year = $(this);
        date[i] = year.attr("Year");
        cals[i] = parseInt(year.attr("Calories"));
        carbs[i] = parseInt(year.attr("Carbohydrates"));
        pros[i] = parseInt(year.attr("Protein"));
        fats[i] = parseInt(year.attr("Fat"));
    
        i = i+1;
        lineGraph();
    })
    console.log(date);
}
function lineGraph(){
    $(function () {
    $('#line-graph').highcharts({
        title: {
            text: 'Macronutrients per Capita per Day in the U.S. Food Supply, 1909 - 2010',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: USDA',
            x: -20
        },
        xAxis: {
            categories: date
        },
        yAxis: {
            title: {
                text: 'Grams(g)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#000000'
            }]
        },
        tooltip: {
            valueSuffix: 'g'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Fats',
            data: fats,
            color: '#56795A',
        }, {
            name: 'Carbs',
            data: carbs,
            color: '#1E6388',
        }, {
            name: 'Proteins',
            data: pros,
            color: '#CBDAF2',
        }]
    });
});
}

function barGraph(){
    $(function () {
    $('#bar-graph').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Adults Who Eat Fruits and Veg. Less than Once Per Day'
        },
        subtitle: {
            text: 'Source: CDC'
        },
        xAxis: {
            categories: [
                'U.S. National',
                'Mississippi',
                'Oklahoma',
                'Arkansas',
                'West Virginia',
                'Louisiana',
                'Tennessee',
                'Kentucky'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage of Adults'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Fruits',
            data: [37.7, 50.8, 50.2, 47.5, 47.2, 46.7, 46.3, 45.9],
            color: '#75A57B',

        }, {
            name: 'Vegetables',
            data: [22.6, 32.3, 26.8, 28.6, 26.2, 32.5, 25.4, 25.2],
            color: '#E0E4E5',

        }
            ]
    });
});
}

function appendFoods(){
    document.getElementById("selected-foods").innerHTML += "<li>" + nutrients[0] + "</li>";
}