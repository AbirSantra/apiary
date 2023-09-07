import React from "react";
import NewsHeader from "./news-header";
import NewsFeed from "./news-feed";

const NewsSection = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <NewsHeader />
      <NewsFeed />
    </div>
  );
};

export default NewsSection;
