//= ../../../../bower_components/chart.js/dist/Chart.min.js

$(function() {

    "use strict";

    /**
    * Charts
    * Docs: https://github.com/chartjs/Chart.js
    */


    /* Line Chart
    ===========================*/
    var usersCtx = $("#users-chart");

    if(usersCtx.length > 0) {
         var studentsChart = new Chart(usersCtx, {
            type: 'line',
            data: {
                labels: ["11.12.2016", "12.12.2016", "13.12.2016", "14.12.2016", "15.12.2016", "16.12.2016", "17.12.2016"],
                datasets: [{
                    label: 'New Users',
                    data: [12, 19, 3, 5, 2, 3, 22],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }


    /* Pie
    ===========================*/

    var browsersCtx = $("#browsers-chart");

    if(browsersCtx.length > 0) {

        var data = {
            labels: [
                "Chrome",
                "Mozilla",
                "IE"
            ],
            datasets: [
                {
                    data: [300, 200, 50],
                    backgroundColor: [
                        "#f24b4b",
                        "#f0b15c",
                        "#359ce6"
                    ],
                    hoverBackgroundColor: [
                        "#e63838",
                        "#e5a146",
                        "#248bd6"
                    ]
            }]
        };

        var myPieChart = new Chart(browsersCtx,{
            type: 'pie',
            data: data,
            options: {
                cutoutPercentage: 0
            }
        });
    }

});
