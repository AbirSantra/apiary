"use client";

import React from "react";
import moment from "moment";
import NewsCard from "./news-card";
import { ScrollArea } from "./ui/scroll-area";
import useNews from "@/hooks/useNews";

const NewsSection = () => {
  const { articles, loading, error } = useNews();
  console.log("Articles: ", articles);
  console.log("Error: ", error);

  const day = moment().format("dddd").toUpperCase();
  const date = moment().format("MMM Do, YYYY");
  return (
    <div className="h-full w-full bg-white sm:rounded-lg">
      <ScrollArea className="h-full w-full">
        <div className="flex flex-col gap-4 p-4 sm:p-6">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold capitalize text-indigo-500">
              {day}{" "}
              <span className="text-sm font-normal capitalize text-slate-400">
                {date}
              </span>
            </p>
          </div>
          <p className="text-sm font-semibold uppercase text-indigo-500">
            TOP HEADLINES
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default NewsSection;
