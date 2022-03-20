const API_KEY = 'f365d279f34b8885db2a93f1ffb197a7';

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('.city');
      const weather = document.querySelector('.weather');
      city.innerHTML = data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
