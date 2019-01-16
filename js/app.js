const alertDropdown = document.getElementsByClassName("alert-dropdown");
const messageUserForm = document.getElementById("messageUserForm");
const emailNotificationsCheckbox = document.getElementById('emailNotificationsCheckbox');
const publicProfilecheckbox = document.getElementById('publicProfilecheckbox');
const selectedTimezone = document.getElementById('timezone');
const messageUserSubmit = document.getElementById("messageUserSubmit");
const saveSettingsButton = document.getElementById("saveSettingsButton");


// user click interactions
document.addEventListener('click', function (event) {

  // If the clicked element doesn't have the right selector, bail
  if (event.target.matches('.close-button')) {
    event.preventDefault();
    event.target.parentNode.classList.add("closed");
    setTimeout(function () {
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
      localStorage.setItem('Key', obj);

      alert("It's been saved.");
    }

  } else {
    // console.log(event.target);
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

  console.log("email is " + email);
  console.log("profile is " + profile);
  console.log("timezone is " + savedTimezone);

  if (email === true) {
    emailNotificationsCheckbox.checked = true;
  }

  if (profile === true) {
    publicProfilecheckbox.checked = true;
  }

}

// Message User Form Submit
messageUserForm.addEventListener("submit", messageUser);

function messageUser(e) {
  e.preventDefault();
  messageUserSubmit.innerText = "Checking form";

  setTimeout(function () {
    messageUserSubmit.style.backgroundColor = "#72bb6e";
    messageUserSubmit.innerText = "Success! Message Sent!";
  }, 2000);

}