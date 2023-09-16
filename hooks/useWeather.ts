import React from "react";
import axios from "axios";
import { WeatherErrorType, WeatherResultType } from "@/types/weather-types";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_APPID;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const useWeather = ({
  latitude,
  longitude,
}: {
  latitude: Number | null;
  longitude: Number | null;
}) => {
  const [weatherData, setWeatherData] =
    React.useState<WeatherResultType | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<WeatherErrorType | null>(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      console.log("Fetching Data");
      setLoading(true);

      try {
        const response = await axios(BASE_URL, {
          params: {
            lat: latitude,
            lon: longitude,
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

    if (latitude && longitude) {
      fetchWeather();
    }
  }, [latitude, longitude]);

  return { weatherData, loading, error };
};

export default useWeather;
