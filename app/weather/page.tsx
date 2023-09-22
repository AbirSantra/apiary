import WeatherDescCard from "@/components/weather-desc-card";
import WeatherMainCard from "@/components/weather-main-card";
import React from "react";

const Weather = () => {
  return (
    <div className="padding-x padding-y relative mx-auto  grid min-h-[calc(100dvh-4rem)] w-full max-w-[1440px] grid-cols-1 grid-rows-1 gap-4 md:grid-cols-[2fr_1fr]">
      {/* Today's Weather */}
      <div className="flex flex-col gap-4">
        <WeatherMainCard />
        <WeatherDescCard />
      </div>
      {/* 5day forecast */}
      <div className="h-full bg-white">5 day weather</div>
    </div>
  );
};

export default Weather;
