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
  lighterGrey: string;
  darkGrey: string;
  gray95: string;
}

declare interface SelectedOption {
  id: number | string;
  value: string;
}

declare interface CommonWorkoutProps {
  date: string;
  selectedValue: string;
  distance: number;
  duration: number;
  cadence?: string;
  elevationGain?: string;
  pace?: number;
  speed?: number;
}

declare interface WorkoutItem extends CommonWorkoutProps {
  coordinates: LatLngTuple;
  description?: string;
  weatherInfo: CurrentWeatherData | null;
  _id?: string;
  createdAt?: string;
  isFavorite?: boolean;
}

declare interface WorkoutsDetailsItem extends CommonWorkoutProps {
  id: string;
  time: string;
  city: string;
  weatherInfo: string;
  inFavorites: ReactNode;
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
  errorMessage?: string;
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

declare interface WorkoutFallbackMessage {
  id: string;
  message: string;
  title: string;
  hasWorkouts: boolean;
}

declare type User = firebase.User;

declare interface CurrentUser {
  uid: string;
  name: string | null;
  email: string | null;
  photoURL: string | null;
  phoneNumber?: string | null;
  emailVerified?: boolean;
  firebaseProvider?: string[];
}

declare type Status = 'loading' | 'idle' | 'failed';
