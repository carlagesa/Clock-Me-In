
function getLocation() {
  //Checks if the browser supports geolocation API or not
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }
  else {
    alert("Your browser does not support Geoloation API")
  }
  function onSuccess(data) {
    console.log(data)
  }
  function onError(data) {
    alert(err)
  }
}
getLocation()

//Obtaining html emelemnts using getElementById() method
const Ip = document.getElementById("Ip")
// const version = document.getElementById("version")
const city = document.getElementById("city")
const region = document.getElementById("region")
// const region_code = document.getElementById("region_code")
const org = document.getElementById("org")
const latitude = document.getElementById("latitude")
const country = document.getElementById("country")

//Fetching data from the API then converting it into JSON
fetch('https://ipapi.co/json/')
  .then(function (response) {
    response.json().then(jsonData => {
      //Parsing the data into html with specific id's
      Ip.innerHTML = 'IP :' + " " + jsonData.ip
      // version.innerHTML = jsonData.version
      country.innerHTML = 'Country :' + " " + jsonData.country_name
      city.innerHTML = 'City :' + " " + jsonData.city
      region.innerHTML = 'Region :' + " " + jsonData.region
      // region_code.innerHTML = jsonData.region_code
      org.innerHTML = 'ISP :' + " " + jsonData.org
      latitude.innerHTML = 'Lat :' + " " + jsonData.latitude

      console.log(jsonData);
    });
  })
  .catch(function (error) {
    console.log(error)
  });

document.getElementById("submit").addEventListener("click", submit)
document.addEventListener("DOMContentLoaded", submit)

setInterval(() => {
  if (
    document.getElementById("username").value == ""
    // document.getElementById("password").value == ""
  ) {
    document.getElementById("submit").setAttribute("disabled", "");
  } else {
    document.getElementById("submit").removeAttribute("disabled");
  }
});

// function check(form) {
//   if (form.username.value && form.password.value) {
//     var username = document.getElementById("username").value;
//   } else {
//     alert("Error Password or Username");
//   }
// }

document.getElementById("submit").onclick = function submit() {
  // window.location.href = "../../menu.html";
  var username = document.getElementById("username").value;

  alert(username + " " + "clocked in!");
};
