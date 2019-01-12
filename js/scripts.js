var trafficChart = document.getElementById("trafficChart");
var dailyTrafficChart = document.getElementById("dailyTrafficChart");
var mobileUserChart = document.getElementById("mobileUserChart");

var lineChart = new Chart(trafficChart, {
  type: 'line',
  data: {
    labels: ['16-20', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-7', '18-24', '25-31'],
    datasets: [{
      label: 'Traffic',
      data: [
        550,
        1200,
        900,
        1400,
        1900,
        1500,
        1700,
        1000,
        1600,
        2300,
        1300,
        2500
      ],
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
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 5
  }
});

var barChart = new Chart(dailyTrafficChart, {
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
      backgroundColor: '#2e4568',
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#727984'

    }]
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3
  }
});

var donutChart = new Chart(mobileUserChart, {
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
      position: 'right',
      labels: {
        // padding: 30
      }
    },
    layout: {
      padding: {
        // left: 20
        // right: 10,
        // top: 0,
        // bottom: 20
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2
  }
});
