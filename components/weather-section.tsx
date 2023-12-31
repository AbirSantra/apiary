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
  const { city, getGeoLocation, locationError } = useGeolocation();
  // console.log(`City: ${city}`);
  // console.log("Location error: ", locationError);

  const { weatherData, error, loading } = useWeather({ city: city });
  // console.log("WeatherData: ", weatherData);
  // console.log("Error: ", error);

  const icon =
    weatherIconMap[weatherData?.weather[0].icon as keyof typeof weatherIconMap];

  if (loading) {
    return (
      <div className="relative flex w-full flex-col gap-4 rounded-lg bg-white p-6 dark:bg-slate-800">
        <p className="text-sm font-semibold uppercase text-indigo-500">
          Weather Forecast
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex h-6 w-1/3 animate-pulse items-center gap-2 rounded-md bg-slate-200 text-xs font-medium text-slate-400"></div>
          <div className="flex h-12 w-2/4 animate-pulse items-start rounded-md bg-slate-200 font-bold text-indigo-500"></div>
          <div className="flex items-center justify-between">
            <p className="h-5 w-1/4 animate-pulse rounded-md bg-slate-200 text-sm font-medium text-slate-400"></p>

            <Button className="bg-indigo-500 hover:bg-indigo-700" asChild>
              <Link
                href="/weather"
                className="flex h-fit w-fit items-center justify-center gap-1 self-end  text-xs text-white"
              >
                <span>Full Forecast</span>
                <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
          <div className="absolute right-6 top-6 h-20 w-20 animate-pulse rounded-md bg-slate-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-col gap-3 rounded-lg bg-white p-6 dark:bg-slate-800">
      <p className="text-sm font-semibold uppercase text-indigo-500">
        Weather Forecast
      </p>
      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
        <Button
          size={"icon"}
          className="h-6 w-6 bg-indigo-500 hover:bg-indigo-600"
          onClick={getGeoLocation}
        >
          <LocateFixedIcon size={16} />
        </Button>
        <p>
          {weatherData?.name}, {weatherData?.sys.country}
        </p>
      </div>
      <div className="flex items-start font-bold text-indigo-500">
        <p className="text-[3rem] leading-none">
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

        <Button className="bg-indigo-500 hover:bg-indigo-700" asChild>
          <Link
            href="/weather"
            className="flex h-fit w-fit items-center justify-center gap-1 self-end  text-xs text-white"
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
        className="absolute right-6 top-6"
      />
    </div>
  );
};

export default WeatherSection;
