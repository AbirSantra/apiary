export default function Home() {
  return (
    <div className="padding-x padding-y grid h-[calc(100dvh-4rem)] grid-cols-1 grid-rows-1 gap-4 md:grid-cols-[auto_20rem]">
      {/* Main Section */}
      <section className="bg-white">
        <div>Header</div>
        <div>New feed</div>
      </section>
      {/* Side Section */}
      <section className="hidden bg-white md:flex">
        <div>Weather</div>
        <div>Currency</div>
      </section>
    </div>
  );
}
