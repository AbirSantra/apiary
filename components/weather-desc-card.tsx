import React from "react";

const WeatherDescCard = () => {
  return (
    <div className="flex h-full flex-col gap-6 rounded-lg bg-white p-6">
      <p className="text-sm font-semibold uppercase text-indigo-500">
        Today&apos;s Highlights
      </p>
      <div className="grid h-full w-full grid-cols-2 gap-4 sm:grid-cols-4">
        <HighlightCard label="Max Temp" value={31} unit="°C" />
        <HighlightCard label="Min Temp" value={31} unit="°C" />
        <HighlightCard label="Humidity" value={31} unit="%" />
        <HighlightCard label="Pressure" value={31} unit="hPa" />
        <HighlightCard label="Rain" value={31} unit="mm" />
        <HighlightCard label="Wind" value={31} unit="m/s" />
        <HighlightCard label="Sunrise" value={31} unit="AM" />
        <HighlightCard label="Sunset" value={31} unit="PM" />
      </div>
    </div>
  );
};

const HighlightCard = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) => {
  return (
    <div className="flex h-full min-h-[10rem] w-full flex-col items-center justify-between gap-2 rounded-lg bg-slate-50 p-4">
      <p className="self-start text-sm font-medium text-indigo-500">{label}</p>
      <p className="text-3xl font-bold text-slate-500 sm:text-4xl">{value}</p>
      <p className="self-end text-sm font-medium text-slate-500">{unit}</p>
    </div>
  );
};

export default WeatherDescCard;
