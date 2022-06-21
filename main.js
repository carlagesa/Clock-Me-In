// fetch("http://ip-api.com/json/{query}")
// .then((response) => response.json())
// .then(data => {
//     console.log(data)
// })
// fetch('https://ipapi.co/8.8.8.8/json/')
// .then(function(response) {
//   response.json().then(jsonData => {
//     console.log(jsonData);
//   });
// })
// .catch(function(error) {
//   console.log(error)
// });

fetch('https://ipapi.co/json/')
.then(function(response) {
  response.json().then(jsonData => {
    Ip.innerHTML = jsonData.ip
    version.innerHTML = jsonData.version
    city.innerHTML = jsonData.city
    region.innerHTML = jsonData.region
    console.log(jsonData);
  });
})
// .catch(function(error) {
//   console.log(error)
// });
const Ip = document.getElementById("Ip")
const version = document.getElementById("version")
const city = document.getElementById("city")
const region = document.getElementById("region")


// function renderIp(data){
// let ipAdress = ""
// console.log(data);
// }
