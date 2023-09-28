import CurrencySection from "@/components/currency-section";
import NewsSection from "@/components/news-section";
import { ScrollArea } from "@/components/ui/scroll-area";
import WeatherSection from "@/components/weather-section";

export default function Home() {
  return (
    <div className="sm:padding-x sm:padding-y relative mx-auto grid h-[calc(100dvh-4rem)] w-full max-w-[1440px] grid-cols-1 grid-rows-1 gap-4 md:grid-cols-[auto_20rem]">
      {/* Main Section */}
      <ScrollArea className="h-full w-full rounded-lg">
        <section className="flex flex-col gap-4">
          <NewsSection />
        </section>
      </ScrollArea>

      {/* Side Section */}
      <section className="hidden md:flex md:max-h-[calc(100dvh-6rem)] md:flex-col md:gap-4">
        <WeatherSection />
        <CurrencySection />
      </section>
    </div>
  );
}
