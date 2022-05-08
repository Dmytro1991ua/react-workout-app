import axios from 'axios';
import { toastService } from './Toast.service';

class WeatherService {
  async getCurrentWeather(latitude: number, longitude: number): Promise<CurrentWeatherData | null> {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_WEATHER_API_ENDPOINT}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      return resp.data ? WeatherService.mapFormWeatherDataToCurrentWeatherData(resp.data) : null;
    } catch (e) {
      toastService.error('Failed to get weather data for the current location');
      return null;
    }
  }

  private static mapFormWeatherDataToCurrentWeatherData(weatherData: any): CurrentWeatherData {
    return {
      city: weatherData.name,
      temperature: weatherData.main.temp,
      maxTemperature: weatherData.main.temp_max,
      minTemperature: weatherData.main.temp_min,
      pressure: weatherData.main.pressure,
      humidity: weatherData.main.humidity,
      feelsLike: weatherData.main.feels_like,
      weatherInfo: weatherData.weather,
      windSpeed: weatherData.wind.speed,
      countryInfo: {
        country: weatherData.sys.country,
        sunrise: weatherData.sys.sunrise,
        sunset: weatherData.sys.sunset,
      },
    };
  }
}

export const weatherService = new WeatherService();
