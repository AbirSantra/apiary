export interface currentWeatherType {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  uvi: number;
  wind_speed: number;
}

export interface weatherType {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface weatherResultType {
  lat: number;
  lon: number;
  timezone: string;
  current: currentWeatherType;
  weather: weatherType[];
}

export interface weatherErrorType {
  cod: number;
  message: string;
  parameters: string[];
}

export interface locationType {
  lat: number;
  lon: number;
}