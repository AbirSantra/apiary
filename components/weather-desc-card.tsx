import { WeatherResultType } from "@/types/weather-types";
import moment from "moment-timezone";
import React from "react";

const WeatherDescCard = ({
  data,
  loading,
}: {
  data: WeatherResultType | null;
  loading: boolean;
}) => {
  return (
    <div className="flex h-full flex-col gap-6 rounded-lg bg-white p-6 dark:bg-slate-800">
      <p className="text-sm font-semibold uppercase text-indigo-500">
        Today&apos;s Highlights
      </p>

      {loading ? (
        <div className="grid h-full w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: 8 }).map((element, index) => (
            <HighlightCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid h-full w-full grid-cols-2 gap-4 sm:grid-cols-4">
          <HighlightCard
            label="Max Temp"
            value={data?.main.temp_max || 0}
            unit="°C"
          />
          <HighlightCard
            label="Min Temp"
            value={data?.main.temp_min || 0}
            unit="°C"
          />
          <HighlightCard
            label="Humidity"
            value={data?.main.humidity || 0}
            unit="%"
          />
          <HighlightCard
            label="Pressure"
            value={data?.main.pressure || 0}
            unit="hPa"
          />
          <HighlightCard
            label="Rain"
            value={(data?.rain && data?.rain["1h"]) || 0}
            unit="mm"
          />
          <HighlightCard
            label="Wind"
            value={data?.wind.speed || 0}
            unit="m/s"
          />
          <HighlightCard
            label="Sunrise"
            value={
              moment.unix(data?.sys.sunrise as number).format("hh:mm") ||
              "00:00"
            }
            unit="AM"
          />
          <HighlightCard
            label="Sunset"
            value={
              moment.unix(data?.sys.sunset as number).format("hh:mm") || "00:00"
            }
            unit="PM"
          />
        </div>
      )}
    </div>
  );
};

const HighlightCard = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number | string;
  unit: string | null;
}) => {
  return (
    <div className="flex h-full min-h-[10rem] w-full flex-col items-center justify-between gap-2 rounded-lg bg-slate-50 p-4 dark:border dark:border-slate-700 dark:bg-slate-800">
      <p className="self-start text-xs font-medium uppercase text-indigo-500">
        {label}
      </p>
      <p className="text-3xl font-bold text-slate-500 sm:text-4xl">{value}</p>
      <p className="self-end text-sm font-medium text-slate-500">{unit}</p>
    </div>
  );
};

const HighlightCardSkeleton = () => {
  return (
    <div className="flex h-full min-h-[10rem] w-full animate-pulse flex-col items-center justify-between gap-2 rounded-lg bg-slate-50 p-4 dark:border dark:border-slate-700 dark:bg-slate-800">
      <p className="h-4 w-16 self-start rounded-sm bg-slate-200 text-sm font-medium text-indigo-500"></p>
      <p className="h-7 w-16 rounded-md bg-slate-200 text-3xl font-bold text-slate-500 sm:h-9 sm:text-4xl"></p>
      <p className="h-4 w-4 self-end rounded-sm bg-slate-200 text-sm font-medium text-slate-500"></p>
    </div>
  );
};

export default WeatherDescCard;
