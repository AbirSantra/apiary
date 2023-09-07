import NewsSection from "@/components/news-section";

export default function Home() {
  return (
    <div className="padding-x padding-y relative grid min-h-[calc(100dvh-4rem)] grid-cols-1 grid-rows-1 gap-4 md:grid-cols-[auto_20rem]">
      {/* Main Section */}
      <section className="flex flex-col gap-4">
        <NewsSection />
      </section>
      {/* Side Section */}
      <section className=" hidden bg-white md:flex md:max-h-[calc(100dvh-6rem)]">
        <div>Weather</div>
        <div>Currency</div>
      </section>
    </div>
  );
}
