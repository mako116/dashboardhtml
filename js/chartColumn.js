var options = {
    series: [{
        data: [0.4, 1.3, 0.8, 1.7] // Normalized data
    }],
    chart: {
        type: 'bar',
        height: 350,
        width: "100%",
        toolbar: {
            show: false
        },
        animations: {
            enabled: true, // Enable animations
            easing: 'easeinout',
            speed: 800 // Animation duration in milliseconds
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
            barHeight: "75%" // Proper bar scaling
        }
    },
    tooltip: {
        enabled: true // Enable hover tooltips
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Microsoft', 'Secure Server', 'ADFS', 'GoDaddy'],
    },
    yaxis: {
        min: 0,
        max: 2.0, // Set fixed range
        tickAmount: 11, // Ensure 0.0, 0.1, ..., 2.0
        labels: {
            formatter: function(val) {
                // Check if val is a number and format it
                return (typeof val === 'number' && !isNaN(val)) ? val.toFixed(1) : val;
            }
        }
    },
    colors: ['#1449A6', '#00E396', '', '#FEB019'], // Colors for each bar
    fill: {
        opacity: 1, // Ensure bars are solid
    },
    responsive: [
        {
            breakpoint: 1024, // Medium devices (tablets)
            options: {
                chart: {
                    height: 300
                },
                plotOptions: {
                    bar: {
                        barHeight: "60%" // Adjust bar height
                    }
                }
            }
        },
        {
            breakpoint: 768, // Small devices (landscape phones)
            options: {
                chart: {
                    height: 250
                },
                plotOptions: {
                    bar: {
                        barHeight: "50%"
                    }
                }
            }
        },
        {
            breakpoint: 480, // Extra small devices (phones)
            options: {
                chart: {
                    height: 200
                },
                plotOptions: {
                    bar: {
                        barHeight: "40%"
                    }
                },
                xaxis: {
                    labels: {
                        style: {
                            fontSize: '10px' // Smaller font size for smaller screens
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: '10px'
                        }
                    }
                }
            }
        }
    ]
};

var chart = new ApexCharts(document.querySelector("#apex"), options);
chart.render();
