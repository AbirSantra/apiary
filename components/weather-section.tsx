"use client";

import useGeolocation from "@/hooks/useGeolocation";
import useWeather from "@/hooks/useWeather";
import { ArrowRight, LocateFixedIcon, MapPin } from "lucide-react";
import React from "react";
import weatherIconMap from "@/constants/weather-icon-map";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const WeatherSection = () => {
  const { latitude, longitude, locationError, getCoords } = useGeolocation();
  console.log(`Lat: ${latitude}, Lon: ${longitude}, Error: ${locationError}`);

  const { weatherData, error, loading } = useWeather({ latitude, longitude });
  console.log("WeatherData: ", weatherData);
  console.log("Error: ", error);

  const icon =
    weatherIconMap[weatherData?.weather[0].icon as keyof typeof weatherIconMap];

  if (loading) {
    return (
      <div className="relative flex w-full flex-col gap-4 rounded-lg bg-white p-6 dark:bg-slate-800">
        <p className="text-sm font-semibold uppercase text-indigo-500">
          Weather Forecast
        </p>
        <div className="flex animate-pulse flex-col gap-4">
          <div className="flex h-6 w-1/3 items-center gap-2 rounded-md bg-slate-200 text-xs font-medium text-slate-400"></div>
          <div className="flex h-16 w-2/4 items-start rounded-md bg-slate-200 font-bold text-indigo-500"></div>
          <div className="flex items-center justify-between">
            <p className="h-5 w-1/4 rounded-md bg-slate-200 text-sm font-medium text-slate-400"></p>

            <div className="h-4 w-1/4 rounded-md bg-slate-200 text-xs text-slate-400"></div>
          </div>
          <div className="absolute right-6 top-6 h-20 w-20 rounded-md bg-slate-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-col gap-4 rounded-lg bg-white p-6 dark:bg-slate-800">
      <p className="text-sm font-semibold uppercase text-indigo-500">
        Weather Forecast
      </p>
      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
        <Button
          size={"icon"}
          className="h-6 w-6 bg-indigo-500 hover:bg-indigo-600"
          onClick={getCoords}
        >
          <LocateFixedIcon size={16} />
        </Button>
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

        <Link
          href="/weather"
          className="flex w-fit items-center justify-center gap-1 text-xs text-slate-400 hover:underline"
        >
          <span>Full Forecast</span>
          <ArrowRight size={14} />
        </Link>
      </div>
      <Image
        src={icon}
        alt={weatherData?.weather[0].description || "weather-icon"}
        height={80}
        width={80}
        className="absolute right-6 top-6"
      />
    </div>
  );
};

export default WeatherSection;
