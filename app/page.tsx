import NewsSection from "@/components/news-section";
import WeatherSection from "@/components/weather-section";

export default function Home() {
  return (
    <div className="sm:padding-x sm:padding-y relative mx-auto grid h-[calc(100dvh-4rem)] w-full max-w-[1440px] grid-cols-1 grid-rows-1 gap-4 md:grid-cols-[auto_20rem]">
      {/* Main Section */}
      <section className="flex flex-col gap-4">
        <NewsSection />
      </section>
      {/* Side Section */}
      <section className=" hidden md:flex md:max-h-[calc(100dvh-6rem)] md:flex-col md:gap-4">
        {/* <WeatherSection /> */}
        <div>Currency</div>
      </section>
    </div>
  );
}
