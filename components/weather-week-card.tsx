import { DailyWeatherType } from "@/types/weather-types";
import Image from "next/image";
import React from "react";
import moment from "moment-timezone";
import weatherIconMap from "@/constants/weather-icon-map";

const WeatherWeekCard = ({
  data,
  loading,
}: {
  data: DailyWeatherType[];
  loading: boolean;
}) => {
  return (
    <div className="flex h-full flex-col gap-6 rounded-lg bg-white p-6">
      <p className="text-sm font-semibold uppercase text-indigo-500">
        7-day Forecast
      </p>
      {loading ? (
        <div className="flex h-full w-full flex-col justify-between divide-y">
          {Array.from({ length: 7 }).map((element, index) => (
            <WeatherDayCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="flex h-full w-full flex-col justify-between divide-y">
          {data.map((element, index) => (
            <WeatherDayCard key={index} data={element} />
          ))}
        </div>
      )}
    </div>
  );
};

const WeatherDayCard = ({ data }: { data: DailyWeatherType }) => {
  const icon =
    weatherIconMap[data?.weather[0].icon as keyof typeof weatherIconMap];
  return (
    <div className="flex h-full items-center justify-between py-4">
      <p className="font-medium uppercase text-slate-400">
        {moment.unix(data.dt).format("ddd")}
      </p>
      <div className="flex items-center justify-center gap-2">
        <Image src={icon} alt={"weather-icon"} height={48} width={48} />
        <p className="text-sm text-slate-400">{data.weather[0].main}</p>
      </div>
      <p className="font-medium text-slate-500">
        <span className="font-semibold text-indigo-500">
          {Math.round(data.temp.max)}
        </span>
        /{Math.round(data.temp.min)}
      </p>
    </div>
  );
};

const WeatherDayCardSkeleton = () => {
  return (
    <div className="flex h-full animate-pulse items-center justify-between py-4">
      <p className="h-4 w-12 rounded-md bg-slate-200 font-medium uppercase text-slate-400"></p>
      <div className="flex items-center justify-center gap-2">
        <div className="h-12 w-12 rounded-md bg-slate-200" />
        <p className="h-3 w-12 rounded-md bg-slate-200 text-sm text-slate-400"></p>
      </div>
      <p className="h-4 w-16 rounded-md bg-slate-200 font-medium text-slate-500"></p>
    </div>
  );
};

export default WeatherWeekCard;
