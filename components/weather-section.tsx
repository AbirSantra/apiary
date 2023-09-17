"use client";

import useGeolocation from "@/hooks/useGeolocation";
import useWeather from "@/hooks/useWeather";
import { ArrowRight, MapPin } from "lucide-react";
import React from "react";
import weatherIconMap from "@/constants/weather-icon-map";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface WeatherIconType {
  icon: string;
}

const WeatherSection = () => {
  const { latitude, longitude, locationError } = useGeolocation();
  console.log(`Lat: ${latitude}, Lon: ${longitude}, Error: ${locationError}`);

  const { weatherData, error, loading } = useWeather({ latitude, longitude });
  console.log("WeatherData: ", weatherData);
  console.log("Error: ", error);

  const icon =
    weatherIconMap[weatherData?.weather[0].icon as keyof typeof weatherIconMap];

  if (loading) {
    return (
      <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-6 dark:bg-slate-800">
        <p className="text-sm font-semibold uppercase text-indigo-600">
          Weather Forecast
        </p>
        <div className="flex items-center gap-1 text-xs font-medium text-slate-400">
          <p className="h-3 w-32 animate-pulse bg-slate-100"></p>
        </div>
        <div className="flex h-16 w-24 animate-pulse items-start bg-slate-100 font-bold text-indigo-500"></div>
        <p className="h-5 w-32 animate-pulse bg-slate-100 text-sm font-medium text-slate-400"></p>
      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-col gap-4 rounded-lg bg-white p-6 dark:bg-slate-800">
      <p className="text-sm font-semibold uppercase text-indigo-500">
        Weather Forecast
      </p>
      <div className="flex items-center gap-1 text-xs font-medium text-slate-400">
        <MapPin size={16} />
        <p>
          {weatherData?.name}, {weatherData?.sys.country}
        </p>
      </div>
      <div className="flex items-start font-bold text-indigo-500">
        <p className="text-[4rem] leading-none">
          {weatherData?.main.temp && Math.round(weatherData?.main.temp)}
        </p>
        <p className="text-[2rem] leading-tight">°C</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-400">
          Feels like{" "}
          {weatherData?.main.feels_like &&
            Math.round(weatherData?.main.feels_like)}
          °C
        </p>
        <Button size={"sm"} asChild>
          <Link
            href="/weather"
            className="flex w-fit items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 text-xs hover:bg-indigo-700"
          >
            <span>Full Forecast</span>
            <ArrowRight size={14} />
          </Link>
        </Button>
      </div>
      <Image
        src={icon}
        alt={weatherData?.weather[0].description || "weather-icon"}
        height={80}
        width={80}
        className="absolute right-8 top-8"
      />
    </div>
  );
};

export default WeatherSection;
