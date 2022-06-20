//show day and time

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let h4 = document.querySelector("h4");
h4.innerHTML = `${day} ${hour}:${minute}`;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#minTemp").innerHTML = response.data.main.temp_min;
  document.querySelector("#maxTemp").innerHTML = response.data.main.temp_max;
  document.querySelector("#display-comment").innerHTML =
    response.data.weather[0].main;
  console.log(response.data);
}

function searchCity(city) {
  let units = "metric";
  let apiKey = "298d0fec31aed96caba46c7daf227fb8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchLocation(position) {
  let apiKey = "298d0fec31aed96caba46c7daf227fb8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(apiUrl);
}

//search city
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  let searchInput = document.querySelector("#search-text-input");
  searchCity(city);
  let h1 = document.querySelector("#city");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Amsterdam");

//Change to Celsius
//function showCelsius(event) {
//event.preventDefault();
//let celsius = document.querySelector("h2");
//celsius.innerHTML = "19";
//}
//let displaycelsius = document.querySelector("#celsius");
//displaycelsius.addEventListener("click", showCelsius);

//Change to fahrenheit
//function showFahrenheit(event) {
//event.preventDefault();
//let fahrenheit = document.querySelector("h2");
// fahrenheit.innerHTML = "66";
//}
//let displayFahrenheit = document.querySelector("#fahrenheit");
//displayFahrenheit.addEventListener("click", showFahrenheit);
