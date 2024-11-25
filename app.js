const apiKey = "a38490a8eb8db21367a8231a4f357a73";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_status = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`); // Use backticks for string interpolation
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".percentage_humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".wind_speed").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clear") {
    weather_status.src = "images/sunny.gif";
  } else if (data.weather[0].main == "Clouds") {
    weather_status.src = "images/cloudy.gif";
  } else if (data.weather[0].main == "Rain") {
    weather_status.src = "images/rain.gif";
  } else if (data.weather[0].main == "Drizzle") {
    weather_status.src = "images/drizzle.gif";
  } else if (data.weather[0].main == "Mist") {
    weather_status.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weather_status.src = "images/snow.gif";
  }
}

searchBar.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".search button").click();
  }
});

searchBtn.addEventListener("click", () => {
  if (searchBar.value == "") {
    alert("Enter a city name!");
  } else {
    checkWeather(searchBar.value);
  }
});
