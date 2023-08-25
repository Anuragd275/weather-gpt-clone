'use strict'

// Toggling dark theme and light theme

const btn = document.getElementById("the")

btn.addEventListener("click", function(){
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const className = document.body.className;
    if(className == "light-theme") {
        this.innerHTML = `<i class="fa-solid fa-moon" id="themeIcon"></i>`;
    } else {
        this.innerHTML = `<i class="fa-solid fa-sun" id="themeIcon"></i>`;
    }
})

function getCurrentTemperature() {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const apiEndpoint = `https://api.weatherapi.com/v1/current.json?key=26e1733cea604488a77134653231301&q=${latitude},${longitude}&aqi=no`;

      fetch(apiEndpoint)
        .then((response) => response.json())
        .then((data) => {
            const location = data.location.name;
            const { temp_c, humidity, condition, wind_kph} = data.current;

          // Update the temperature in the HTML element with id 'temperature'
          document.getElementById("temperature").textContent = `${temp_c}°C`;
          document.getElementById('location').textContent = `${location}`;
          document.getElementById('condition').textContent = condition.text;
          document.getElementById('humidity').textContent = `${humidity}%`;
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    });
  }

  // Call the function to get the current temperature when the page loads
  window.addEventListener("load", getCurrentTemperature);