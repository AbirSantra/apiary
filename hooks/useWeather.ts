import React from "react";
import axios from "axios";
import {
  DailyWeatherType,
  WeatherErrorType,
  WeatherResultType,
} from "@/types/weather-types";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_APPID;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const DAILY_URL = `https://api.openweathermap.org/data/2.5/onecall`;

const useWeather = ({ city }: { city: string | null }) => {
  const [weatherData, setWeatherData] =
    React.useState<WeatherResultType | null>(null);
  const [dailyWeather, setDailyWeather] = React.useState<DailyWeatherType[]>(
    [],
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<WeatherErrorType | null>(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);

      try {
        console.log("Fetching Data");
        const response = await axios(BASE_URL, {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        });

        const lat = response.data.coord.lat;
        const lon = response.data.coord.lon;

        const dailyData = await axios(DAILY_URL, {
          params: {
            lat: lat,
            lon: lon,
            appid: API_KEY,
            units: "metric",
            cnt: 7,
            exclude: "current,minutely,hourly,alerts",
          },
        });

        setWeatherData(response.data);
        setDailyWeather(dailyData.data.daily);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  return { weatherData, loading, error, dailyWeather };
};

export default useWeather;
