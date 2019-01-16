const trafficChart = document.getElementById("trafficChart");
const dailyTrafficChart = document.getElementById("dailyTrafficChart");
const mobileUserChart = document.getElementById("mobileUserChart");
const chart = document.getElementsByTagName("canvas");
const alertDropdown = document.getElementsByClassName("alert-dropdown");
const userSearchField = document.getElementById("searchUser");
const users = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];
const messageUserForm = document.getElementById("messageUserForm");
const emailNotificationsCheckbox = document.getElementById('emailNotificationsCheckbox');
const publicProfilecheckbox = document.getElementById('publicProfilecheckbox');
const selectedTimezone = document.getElementById('timezone');
const messageUserSubmit = document.getElementById("messageUserSubmit");
const saveSettingsButton = document.getElementById("saveSettingsButton");



//traffic charts objects
const hourly = {
  labels: ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"],
  data: [210, 120, 150, 120, 160, 240, 250, 210, 120, 150, 120, 160, 240, 250, 210, 120, 150, 120, 160, 240, 250, 180, 200, 160]
};

const daily = {
  labels: ["S","M","T","W","T","F","S"],
  data: [210, 120, 150, 120, 160, 240, 250]
};

const weekly = {
  labels: ["1-7","8-14","15-21","22-29","30-5","6-13","14-20","21-28","29-5","6-13","14-20"],
  data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750]
};

const monthly = {
  labels: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
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
            beginAtZero:true
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
    //   borderWidth: 1,
    //   borderColor: '#7377bf',
    //   hoverBorderWidth: 3,
    //   hoverBorderColor: '#7377bf'
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

// user click interactions
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
  if (event.target.matches('.close-button')) {
    event.preventDefault();
    event.target.parentNode.classList.add("closed");
    setTimeout(function() {
      event.target.parentNode.style.display = "none";
    }, 1005);

  } else if (event.target.matches('.alert-toggle')) {
    alertDropdown[0].classList.toggle("opened");

  } else if (event.target.matches('.hourly-data')) {
    for (var i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].classList.remove('active');
    }
    event.target.classList.add("active");
    lineChart.data.labels = hourly.labels;
    lineChart.data.datasets[0].data = hourly.data;
    lineChart.update();

  } else if (event.target.matches('.daily-data')) {
    for (var i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].classList.remove('active');
    }
    event.target.classList.add("active");
    
    lineChart.data.labels = daily.labels;
    lineChart.data.datasets[0].data = daily.data;
    lineChart.update();

  } else if (event.target.matches('.weekly-data')) {
    for (var i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].classList.remove('active');
    }
    event.target.classList.add("active");

    lineChart.data.labels = weekly.labels;
    lineChart.data.datasets[0].data = weekly.data;
    lineChart.update();

  } else if (event.target.matches('.monthly-data')) {
    for (var i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].classList.remove('active');
    }
    event.target.classList.add("active");

    lineChart.data.labels = monthly.labels;
    lineChart.data.datasets[0].data = monthly.data;
    lineChart.update();

  } else if (event.target.matches('.button-save')) {

    if (selectedTimezone.value === "default") {
      alert("Please select Timezone.");
    } else {
      let obj = {
        email: emailNotificationsCheckbox.checked,
        profile: publicProfilecheckbox.checked,
        timezone: selectedTimezone.value
      };
  
      obj = JSON.stringify(obj);
      localStorage.setItem('Key',obj);
  
      alert("It's been saved.");
    }

  } else {
    console.log(event.target);
    return;
  }

}, false);


// retrieve saved data from localStorage
if (localStorage.length === 1) {

  const jsonObj = localStorage.getItem('Key');
  const jsObj = JSON.parse(jsonObj);
  const savedTimezone = jsObj.timezone;
  const email = jsObj.email;
  const profile = jsObj.profile;

  selectedTimezone.value = savedTimezone;

  console.log("email is "+email);
  console.log("profile is "+profile);
  console.log("timezone is "+savedTimezone);

  if(email === true) {
    emailNotificationsCheckbox.checked = true;
  }

  if(profile === true) {
    publicProfilecheckbox.checked = true;
  }

}

// search autocomplete
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(userSearchField, users);


// Message User Form Submit
messageUserForm.addEventListener("submit", messageUser);

function messageUser(e) {
  e.preventDefault();
  messageUserSubmit.innerText = "Checking form";
  
  setTimeout(function() {
    messageUserSubmit.style.backgroundColor = "#72bb6e";
    messageUserSubmit.innerText = "Success! Message Sent!";
  }, 2000);
  
}

