function getLocation() {
  //Checks if the browser supports geolocation API or not
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser does not support Geoloation API");
  }
  function onSuccess(data) {
    console.log(data);
  }
  function onError(data) {
    alert(err);
  }
}
getLocation();


const workIP = document.getElementById("work-ip");
//Obtaining html emelemnts using getElementById() method
const Ip = document.getElementById("Ip");
// const version = document.getElementById("version")
const city = document.getElementById("city");

const region = document.getElementById("region");
// const region_code = document.getElementById("region_code")
const org = document.getElementById("org");
const latitude = document.getElementById("latitude");
const country = document.getElementById("country");
const flag = document.getElementById("flag");

//Fetching data from the API then converting it into JSON
fetch(
  "https://api.ipgeolocation.io/ipgeo?apiKey=acb67fe1fbde478aa15752488d784684"
  // "https://api.ipgeolocation.io/timezone?apiKey=acb67fe1fbde478aa15752488d784684"
)
  .then(function (response) {
    response.json().then((jsonData) => {
      //Parsing the data into html with specific id's
      Ip.innerHTML = "IP :" + " " + jsonData.ip;
      workIP.innerHTML = "Work IP" + " " + jsonData.ip;
      // // version.innerHTML = jsonData.version
      country.innerHTML = "Country :" + " " + jsonData.country_name;
      // flag.innerHTML = jsonData.country_flag;
      city.innerHTML = "City :" + " " + jsonData.country_capital;
      // region.innerHTML = "Date :" + " " + jsonData.time_zone.current_time;
      // region_code.innerHTML = jsonData.state_prov;
      org.innerHTML = "ISP :" + " " + jsonData.isp;
      latitude.innerHTML =
        "Lat :" + " " + jsonData.latitude + " " + "Long " + jsonData.longitude;

      console.log(jsonData);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
  

<<<<<<< HEAD
// document.getElementById("submit").addEventListener("click", submit);
// document.addEventListener("DOMContentLoaded", submit);

// setInterval(() => {
//   if (
//     document.getElementById("username").value == ""
//     // document.getElementById("password").value == ""
//   ) {
//     document.getElementById("submit").setAttribute("disabled", "");
//   } else {
//     document.getElementById("submit").removeAttribute("disabled");
//   }
// });
=======
document.getElementById("submit").addEventListener("click", submit);
document.addEventListener("DOMContentLoaded", getLocation);

setInterval(() => {
  if (
    document.getElementById("username").value == "" 
    // document.getElementById("password").value == ""
    // document.getElementById("work-ip").value ==  Ip.jsonData.ip
  ) {
    document.getElementById("submit").setAttribute("disabled", "");
   
  } else {
    document.getElementById("submit").removeAttribute("disabled");
  }
});
>>>>>>> 1c147f3a025581ed1d3d696b26826dd8a3e9ce5a

// function check(form) {
//   if (form.username.value && form.password.value) {
//     var username = document.getElementById("username").value;
//   } else {
//     alert("Error Password or Username");
//   }
// }

<<<<<<< HEAD
// document.getElementById("submit").onclick = function submit() {
//   // window.location.href = "../../menu.html";
//   var username = document.getElementById("username").value;
=======
document.getElementById("submit").onclick = function submit() {
  var username = document.getElementById("username").value;
>>>>>>> 1c147f3a025581ed1d3d696b26826dd8a3e9ce5a

//   alert(username + " " + "clocked in!");
// };
// new lines

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const toDoContainer = document.querySelector("#tasks");
  const newTask = document.querySelector("#new-task-description");
  const worker = document.getElementById("workerId");
  const form = document.querySelector("#create-task-form");

  const isValidInput = (input) => {
    input = input.trim();
    return input ? input : false;
  };

  const addTask = (e) => {
    e.preventDefault();
    getTask();
  };

  const getTask = () => {
    const task = newTask.value;
    if (isValidInput(task)) {
      createTask(task);
    }
  };

  const createTask = (taskContent) => {
    const task = document.createElement("li");
    task.textContent = taskContent;
    toDoContainer.appendChild(task);
    form.reset();
  };

  form.addEventListener("submit", addTask);
});
