var apiKey = config.apiKey;

class Weather {
  constructor(city) {
    this.apiID = apiKey;
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.apiID}`);

    const responseData = await response.json();

    return responseData;

  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}