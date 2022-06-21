
//Obtaining html emelemnts using getElementById() method
const Ip = document.getElementById("Ip")
// const version = document.getElementById("version")
const city = document.getElementById("city")
const region = document.getElementById("region")
// const region_code = document.getElementById("region_code")
const country_calling_code = document.getElementById("country_calling_code")
const latitude = document.getElementById("latitude")
const country = document.getElementById("country")

//Fetching data from the API then converting it into JSON
fetch('https://ipapi.co/json/')
  .then(function (response) {
    response.json().then(jsonData => {
      //Parsing the data into html with specific id's
      Ip.innerHTML = jsonData.ip
      // version.innerHTML = jsonData.version
      country.innerHTML = jsonData.country_name
      city.innerHTML = jsonData.city
      region.innerHTML = jsonData.region
      // region_code.innerHTML = jsonData.region_code
      country_calling_code.innerHTML = jsonData.country_calling_code
      latitude.innerHTML = jsonData.latitude

      console.log(jsonData);
    });
  })
  .catch(function (error) {
    console.log(error)
  });
