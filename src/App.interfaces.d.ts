declare interface MainPalette {
  black: string;
  white: string;
  powderAsh: string;
  darkBlue: string;
  mantis: string;
  mantisDarker: string;
  lighterBlue: string;
  brightGreen: string;
  tomato: string;
  errorBg: string;
  error: string;
}

declare interface SelectedOption {
  id: number | string;
  value: string;
}

declare interface WorkoutItem {
  id: string;
  date: string;
  coordinates: LatLngTuple;
  selectedValue: string;
  distance: number;
  duration: number;
  cadence?: string;
  elevationGain?: string;
  pace?: number;
  description?: string;
  speed?: number;
  isFavorite?: boolean;
}

declare interface MapTilesConfigDetail {
  id: string;
  name: string;
  url: string;
  attribution: string;
  default?: boolean;
  maxZoom?: number;
}

declare interface CoordinatesEntities {
  lat: number;
  lng: number;
}
declare interface CurrentLocationData {
  loaded: boolean;
  coordinates: CoordinatesEntities;
}

declare interface WeatherInfo {
  description: string;
  icon: string;
  id: number;
  main: string;
}

declare interface CountryWeatherInfo {
  country: string;
  sunrise: number;
  sunset: number;
}
declare interface CurrentWeatherData {
  city: string;
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
  pressure: number;
  humidity: number;
  feelsLike: number;
  weatherInfo: WeatherInfo[];
  windSpeed: number;
  countryInfo: CountryWeatherInfo;
}
