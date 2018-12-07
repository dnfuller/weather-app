class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.shortDesc = document.getElementById('w-short-desc');
    this.icon = document.getElementById('w-icon');
    this.longDesc = document.getElementById('w-long-desc');
    this.details = document.getElementById('w-details');    
    this.temp = document.getElementById('w-temp');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }
  
  paint(weather) {

    var temp = Math.floor(weather.main.temp);
    var celsius = ((temp - 32) * .5556).toFixed(1);
    var weatherDesc = weather.weather;
    var degree = parseInt(weather.wind.deg);
    var direction = "";
    var pressure = parseInt(weather.main.pressure);
    var bPressure = (pressure / 33.864).toFixed(2);
    var wind = parseInt(weather.wind.speed).toFixed(1);

    // Convert wind degrees to wind direction
    if (degree >= 348.75 && degree <= 360 || degree >= 1 && degree <= 11.25) {
      direction = "N";
    } else if (degree >= 11.26 && degree <= 33.75) {       direction = "NNE";
    } else if (degree >= 33.76 && degree <= 56.25) {
      direction = "NE";
    } else if (degree >= 56.26 && degree <= 78.75) {
      direction = "ENE";
    } else if (degree >= 78.76 && degree <= 101.25) {
      direction = "E";
    } else if (degree >= 101.26 && degree <= 123.75) {
      direction = "ESE";
    } else if (degree >= 123.76 && degree <= 146.25) {
      direction = "SE";
    } else if (degree >= 146.26 && degree <= 168.75) {
      direction = "SSE";
    } else if (degree >= 168.76 && degree <= 191.25) {
      direction = "S";
    } else if (degree >= 191.26 && degree <= 213.75) {
      direction = "SSW";
    } else if (degree >= 213.76 && degree <= 236.25) {
      direction = "SW";
    } else if (degree >= 236.26 && degree <= 258.75) {
      direction = "WSW";
    } else if (degree >= 258.76 && degree <= 281.25) {
      direction = "W";
    } else if (degree >= 281.26 && degree <= 303.75) {
      direction = "WNW";
    } else if (degree >= 303.76 && degree <= 326.25) {
      direction = "NW";
    } else if (degree >= 326.26 && degree <= 348.75) {
      direction = "NNW";
    } 

    this.location.textContent = weather.name;
    this.temp.textContent = `${temp}\u{00B0} F (${celsius}\u{00B0} C)`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}\u{0025}`;
    this.pressure.textContent = `Barometric Pressure: ${bPressure} Hg`;
    this.wind.textContent = `Wind: From the ${direction} at ${wind} mph`;    

    // Loop through weather.weather to get array object info
    for (var i = 0; i < weatherDesc.length; i++) {
      // var main = weatherDesc[i].main;
      var desc = weatherDesc[i].description.charAt(0).toUpperCase() + weatherDesc[i].description.slice(1);
      var icon = weatherDesc[i].icon;
    }

    this.longDesc.textContent = desc;

    // url to obtain weather image
    var imageURL = `http://openweathermap.org/img/w/${icon}.png`;

    this.icon.setAttribute('src', imageURL);

    // console.log(main);
    // console.log(desc);
    // console.log(icon);

    // console.log(weather.weather,0);    
  }
}