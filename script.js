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
            const currentTemperature = data.current.temp_c;
            const location = data.location.name;

          // Update the temperature in the HTML element with id 'temperature'
          document.getElementById(
            "temperature"
            ).textContent = `${currentTemperature}°C`;
            document.getElementById('location').textContent = `${location}`;
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    });
  }

  // Call the function to get the current temperature when the page loads
  window.addEventListener("load", getCurrentTemperature);