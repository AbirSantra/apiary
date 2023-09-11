export interface CurrentWeatherType {
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

export interface WeatherType {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherResultType {
  lat: number;
  lon: number;
  timezone: string;
  current: CurrentWeatherType;
  weather: WeatherType[];
}

export interface WeatherErrorType {
  cod: number;
  message: string;
  parameters: string[];
}

export interface LocationType {
  lat: number;
  lon: number;
}