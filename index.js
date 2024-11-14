function displayTemperature(response) {
  let city = document.querySelector("#current-city");
  let temp = document.querySelector(".current-temperature-value");
  let temperature = Math.round(response.data.temperature.current); // Access the current temperature
  city.innerHTML = response.data.city;
  temp.innerHTML = temperature; // Display the temperature
}

function search(event) {
  event.preventDefault();
  let search = document.querySelector("#search-input");
  let city = search.value;

  let ApiKey = "9a9b6ao3534d1b2afb7b49dddt30a6e7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
