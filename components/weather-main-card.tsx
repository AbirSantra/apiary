"use client";

import moment from "moment";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "./ui/dialog";
import { WeatherResultType } from "@/types/weather-types";
import weatherIconMap from "@/constants/weather-icon-map";

const WeatherMainCard = ({
  data,
  setCity,
  loading,
}: {
  data: WeatherResultType | null;
  setCity: (city: string | null) => void;
  loading: boolean;
}) => {
  const [cityName, setCityName] = React.useState("Kolkata");
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  const handleSearchSubmit = () => {
    setCity(cityName);
  };

  const day = moment().format("dddd").toUpperCase();
  const date = moment().format("MMM Do, YYYY");
  const icon =
    weatherIconMap[data?.weather[0].icon as keyof typeof weatherIconMap];

  if (loading) {
    return <WeatherMainCardSkeleton />;
  }
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg bg-white p-6 dark:bg-slate-800">
      <div className="flex w-full  items-center justify-between gap-4 ">
        <p className="whitespace-nowrap text-sm font-semibold uppercase text-indigo-500">
          Current Forecast
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size={"icon"}
              className="h-8 w-8 bg-indigo-500 p-2 hover:bg-indigo-700"
            >
              <Search />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-indigo-500">
                Search for another city
              </DialogTitle>
            </DialogHeader>
            <div className="flex w-full max-w-2xl items-center space-x-2">
              <Input
                type="text"
                placeholder="Enter city name"
                className="focus-visible:ring-offset-  h-8 py-1 text-sm focus:outline-0 focus-visible:ring-0"
                value={cityName}
                onChange={handleCityChange}
              />
              <DialogTrigger asChild>
                <Button
                  size={"icon"}
                  className="h-8 w-8 bg-indigo-500 p-2 hover:bg-indigo-700"
                  onClick={handleSearchSubmit}
                >
                  <Search />
                </Button>
              </DialogTrigger>
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex w-full flex-col items-center justify-between sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <p className="text-3xl font-bold ">
            {data?.name}, {data?.sys.country}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold capitalize text-indigo-500">
              {day}{" "}
              <span className="text-sm font-normal capitalize text-slate-400">
                {date}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <Image
              src={icon}
              alt={data?.weather[0].description || "weather-icon"}
              height={80}
              width={80}
              className="h-32 w-32 sm:h-16 sm:w-16"
            />
            <p className="capitalize text-slate-400">
              {data?.weather[0].description}
            </p>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center justify-center sm:my-0 sm:items-end">
          <div className="flex items-start font-bold text-indigo-500">
            <p className="text-[4rem] leading-tight sm:text-[6rem]">
              {data?.main.temp && Math.round(data?.main.temp)}
            </p>
            <p className="text-sm leading-[4rem] sm:text-[1.5rem]">°C</p>
          </div>
          <p className="text-lg text-slate-400">
            {" "}
            Feels like{" "}
            {data?.main.feels_like && Math.round(data?.main.feels_like)}
            °C
          </p>
        </div>
      </div>
    </div>
  );
};

const WeatherMainCardSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg bg-white p-6 dark:bg-slate-800">
      <div className="flex w-full  items-center justify-between gap-4 ">
        <p className="whitespace-nowrap text-sm font-semibold uppercase text-indigo-500">
          Current Forecast
        </p>
        <Dialog>
          <DialogTrigger asChild disabled>
            <Button
              size={"icon"}
              className="h-8 w-8 bg-indigo-500 p-2 hover:bg-indigo-700"
            >
              <Search />
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>
      <div className="flex w-full animate-pulse flex-col items-center justify-between sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <p className="h-8 w-40 rounded-md bg-slate-200 text-3xl font-bold text-slate-800"></p>
          <div className="flex items-center gap-2">
            <p className="h-3 w-60 rounded-sm bg-slate-200 text-sm font-bold capitalize text-indigo-500"></p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="h-32 w-32 rounded-md bg-slate-200 sm:h-16 sm:w-16" />
            <p className="mt-1 h-4 w-16 rounded-md bg-slate-200 text-slate-400"></p>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center justify-center sm:my-0 sm:items-end">
          <div className="flex items-start font-bold text-indigo-500">
            <p className="h-16 w-32 rounded-md bg-slate-200 text-[4rem] leading-tight sm:h-24 sm:text-[6rem]"></p>
          </div>
          <p className="mt-1 h-5 w-48 rounded-sm bg-slate-200 text-lg text-slate-400"></p>
        </div>
      </div>
    </div>
  );
};

export default WeatherMainCard;
