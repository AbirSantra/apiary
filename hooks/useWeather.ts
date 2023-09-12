import React from "react";
import axios from "axios";
import {
  LocationType,
  WeatherErrorType,
  WeatherResultType,
} from "@/types/weather-types";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_APPID;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const useWeather = (location: LocationType | null) => {
  const [weatherData, setWeatherData] =
    React.useState<WeatherResultType | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<WeatherErrorType | null>(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);

      try {
        const response = await axios(BASE_URL, {
          params: {
            lat: location?.lat,
            lon: location?.lon,
            appid: API_KEY,
            units: "metric",
          },
        });

        setWeatherData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location?.lat, location?.lon]);

  return { weatherData, loading, error };
};

export default useWeather;
