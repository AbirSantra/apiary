"use client";

import { MapPin } from "lucide-react";
import React from "react";

const WeatherSection = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-6 dark:bg-slate-800">
      <p className="text-sm font-semibold uppercase text-indigo-600">
        Weather Forecast
      </p>
      <div className="flex items-center gap-1 text-xs font-medium text-slate-400">
        <MapPin size={16} />
        <p>Kolkata, IN</p>
      </div>
      <div className="flex items-start font-bold text-indigo-500">
        <p className="text-[4rem] leading-none">29</p>
        <p className="text-[2rem] leading-tight">°C</p>
      </div>
      <p className="text-sm font-medium text-slate-400">Feels like 32°C</p>
    </div>
  );
};

export default WeatherSection;
