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

//search city
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  console.log(searchInput.value);
  let h1 = document.querySelector("#city");

  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}
let theForm = document.querySelector("#search-form");
theForm.addEventListener("submit", search);

//Change to Celsius
function showCelsius(event) {
  event.preventDefault();
  let celsius = document.querySelector("h2");
  celsius.innerHTML = "19";
}
let displaycelsius = document.querySelector("#celsius");
displaycelsius.addEventListener("click", showCelsius);

//Change to fahrenheit
function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheit = document.querySelector("h2");
  fahrenheit.innerHTML = "66";
}
let displayFahrenheit = document.querySelector("#fahrenheit");
displayFahrenheit.addEventListener("click", showFahrenheit);
