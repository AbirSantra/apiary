"use client";

import React from "react";
import moment from "moment";
import NewsCard, { NewsCardLoadMore, NewsCardSkeleton } from "./news-card";
import { ScrollArea } from "./ui/scroll-area";
import useNews from "@/hooks/useNews";
import { Card, CardContent } from "./ui/card";

const NewsSection = () => {
  const { articles, fetchMoreNews, loading, error } = useNews();
  // console.log("Articles: ", articles);
  // console.log("Error: ", error);

  const day = moment().format("dddd").toUpperCase();
  const date = moment().format("MMM Do, YYYY");

  return (
    <div className="flex h-full w-full flex-col gap-3 bg-white p-4 dark:bg-slate-800 sm:gap-4 sm:rounded-lg sm:p-6">
      <div className="flex items-center gap-2">
        <p className="font-bold capitalize text-indigo-500 sm:text-xl">
          {day}{" "}
          <span className="text-sm font-normal capitalize text-slate-400">
            {date}
          </span>
        </p>
      </div>
      <p className="text-sm font-semibold uppercase text-indigo-500">
        TOP TECH NEWS
      </p>
      <div className="grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {!loading &&
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        {!loading && articles.length !== 20 && (
          <NewsCardLoadMore fetchMore={fetchMoreNews} />
        )}
        {loading &&
          Array.from({ length: 20 }).map((element, index) => (
            <NewsCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default NewsSection;
