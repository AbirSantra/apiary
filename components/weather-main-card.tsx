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

const WeatherMainCard = () => {
  const day = moment().format("dddd").toUpperCase();
  const date = moment().format("MMM Do, YYYY");
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg bg-white p-6">
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
                value={"Kolkata"}
              />
              <Button
                size={"icon"}
                className="h-8 w-8 bg-indigo-500 p-2 hover:bg-indigo-700"
              >
                <Search />
              </Button>
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex w-full flex-col items-center justify-between sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <p className="text-3xl font-bold text-slate-800">Kolkata, IN</p>
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
              src="/weather-icons/01d.png"
              alt={"weather-icon"}
              height={80}
              width={80}
              className="h-32 w-32 sm:h-20 sm:w-20"
            />
            <p className=" text-slate-400">Sunny</p>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center justify-center sm:my-0 sm:items-end">
          <div className="flex items-start font-bold text-indigo-500">
            <p className="text-[4rem] leading-tight sm:text-[6rem]">31</p>
            <p className="text-sm leading-[4rem] sm:text-[1.5rem]">°C</p>
          </div>
          <p className="text-lg text-slate-400">Feels like 25°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherMainCard;
