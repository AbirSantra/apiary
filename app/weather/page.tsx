"use client";
import WeatherDescCard from "@/components/weather-desc-card";
import WeatherMainCard from "@/components/weather-main-card";
import WeatherWeekCard from "@/components/weather-week-card";
import useGeolocation from "@/hooks/useGeolocation";
import useWeather from "@/hooks/useWeather";
import React from "react";

const Weather = () => {
  const { city, setCity, locationError } = useGeolocation();
  // console.log("City Name: ", city);
  // console.log("Location Error: ", locationError);

  const { weatherData, error, loading, dailyWeather } = useWeather({
    city: city,
  });
  // console.log("WeatherData: ", weatherData);
  // console.log("DailyWeatherData: ", dailyWeather);
  // console.log("Error: ", error);

  return (
    <div className="padding-x padding-y relative mx-auto  grid min-h-[calc(100dvh-4rem)] w-full max-w-[1440px] grid-cols-1 grid-rows-1 gap-4 md:grid-cols-[2fr_1fr]">
      {/* Today's Weather */}
      <div className="flex flex-col gap-4">
        <WeatherMainCard
          data={weatherData}
          setCity={setCity}
          loading={loading}
        />
        <WeatherDescCard data={weatherData} loading={loading} />
      </div>
      {/* 5day forecast */}
      <WeatherWeekCard data={dailyWeather} loading={loading} />
    </div>
  );
};

export default Weather;
