"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import WeatherDescCard from "@/components/weather-desc-card";
import WeatherMainCard from "@/components/weather-main-card";
import WeatherWeekCard from "@/components/weather-week-card";
import useGeolocation from "@/hooks/useGeolocation";
import useWeather from "@/hooks/useWeather";
import { Metadata } from "next";
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
    <ScrollArea className="h-full w-full">
      <div className="padding-x padding-y relative mx-auto  grid min-h-[calc(100dvh-4rem)] w-full max-w-[1440px] grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
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
    </ScrollArea>
  );
};

export default Weather;
