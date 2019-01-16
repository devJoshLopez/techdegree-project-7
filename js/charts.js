const trafficChart = document.getElementById("trafficChart");
const dailyTrafficChart = document.getElementById("dailyTrafficChart");
const mobileUserChart = document.getElementById("mobileUserChart");

//traffic charts objects
const hourly = {
    labels: ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
    data: [210, 120, 150, 120, 160, 240, 250, 210, 120, 150, 120, 160, 240, 250, 210, 120, 150, 120, 160, 240, 250, 180, 200, 160]
  };
  
  const daily = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    data: [210, 120, 150, 120, 160, 240, 250]
  };
  
  const weekly = {
    labels: ["1-7", "8-14", "15-21", "22-29", "30-5", "6-13", "14-20", "21-28", "29-5", "6-13", "14-20"],
    data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750]
  };
  
  const monthly = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    data: [1100, 850, 900, 800, 1200, 750, 800, 700, 1100, 1000, 850, 950]
  };
  
  const lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
      labels: hourly.labels,
      datasets: [{
        label: 'Traffic',
        data: hourly.data,
        backgroundColor: '#e2e3f6',
        borderWidth: 1,
        borderColor: '#7477bf',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
        pointBorderWidth: 2
      }]
    },
    options: {
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 5
    }
  });
  
  const barChart = new Chart(dailyTrafficChart, {
    type: 'bar',
    data: {
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      datasets: [{
        label: 'Daily Traffic',
        data: [
          50,
          100,
          150,
          100,
          180,
          80,
          120
        ],
        backgroundColor: '#7377bf'
      }]
    },
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2
    }
  });
  
  const donutChart = new Chart(mobileUserChart, {
    type: 'doughnut',
    data: {
      labels: [
        'Phones',
        'Tablets',
        'Desktop'
      ],
      datasets: [{
        label: 'Mobile Users',
        data: [
          120,
          90,
          50
        ],
        backgroundColor: [
          '#74b1bf',
          '#81c98f',
          '#7377bf'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#727984'
      }]
    },
    options: {
      legend: {
        position: 'right'
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2
    }
  });