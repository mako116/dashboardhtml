var options = {
  series: [44, 55, 13],
  chart: {
    type: 'donut',
    width: 350, // Fully responsive width
  },
  labels: ['Invalid', 'Valid', 'SSO'],
  dataLabels: {
    enabled: false
  },
  colors: ['#8B0000', '#006400', '#2A355F'],
  responsive: [
    {
      breakpoint: 1200, // Large devices (desktops)
      options: {
        chart: {
          width: 500,  
        },
        legend: {
          position: 'right',
          fontSize: '14px',
        }
      }
    },
    {
      breakpoint: 992, // Medium devices (tablets)
      options: {
        chart: {
          width: 450, 
          height: 400// Adjust width for tablets
        },
        legend: {
          position: 'bottom',
          fontSize: '14px',
          
        }
      }
    },
    
    
  ],
  legend: {
    position: 'right', // Default position for large screens
    offsetY: 0,
    height: 160,
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();