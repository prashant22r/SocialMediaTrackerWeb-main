$(document).ready(function(){
    

    var options = {
        series:[{
            name:'series1',
            data:[101,64,78,191,42,109,100,230]
        },{
            name:'series2',
            data:[41,32,85,42,124,52,71,120]
        }],
        chart:{
            height:300,
            type:'area',
            toolbar:{
                show:false,
            }
        },
        dataLabels:{
            enabled:false
        },
        colors: ['#1a73e8','#e91e63'],
        stroke:{
            curve:'smooth'
        },
        fill:{
            type:'gradient',
            gradient:{
                opacityFrom:0.6,
                opacityTo:0.8
            }
        },
        tooltip:{
            theme:'dark'
        },
        xaxis:{
            categories:[
                "Jan",
                "Feb",
                "March",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sep",
                "Oct"
            ],
            labels:{
                style:{
                    colors:'black'
                }
            }
        },
        yaxis:{
            labels:{
                style:{
                    colors:'black'
                }
            }
        },
        legend:{
            labels:{
                colors:'black'
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#chLine"), options);
    chart.render();


    var options={
        series:[44,55,17,34],
        lables:['Impression','Followers','Engagement','Likes',],
        chart:{
            type:'donut',
            height:250,
            plotOptions:{
            pie:{
            expandOnClick:true
            },
        }, 
        },
        colors:['#3a86ff','#3d348b','#ff006e','#ffbe0b'],
        legend:{
            show:false
        }
    };
    var chart=new ApexCharts(document.querySelector('#dougnut-chart'),options);
    chart.render();

});

