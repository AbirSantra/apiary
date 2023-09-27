"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { NewsArticleType } from "@/types/news-types";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const NewsCard = ({ article }: { article: NewsArticleType }) => {
  const publishTime = moment(article.pubDate).fromNow();

  return (
    <Card className=" duration-300 ease-in-out hover:border-indigo-500">
      <CardContent className="h-full p-2">
        <Link
          href={article.link}
          className="flex h-full flex-col gap-2"
          target="_blank"
        >
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-sm bg-slate-200">
            {article.image_url ? (
              <Image
                src={article.image_url}
                alt={article.description || article.title}
                fill={true}
                sizes="30rem"
              />
            ) : (
              <p className="text-xs text-slate-500">No image found</p>
            )}
          </div>
          <p className="line-clamp-2 text-sm font-bold text-slate-900">
            {article.title}
          </p>
          <p className="mt-auto justify-self-end text-xs font-medium text-slate-400">
            <span className="capitalize text-indigo-500">
              {article.source_id}
            </span>{" "}
            | {publishTime}
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export const NewsCardSkeleton = () => {
  return (
    <Card className=" duration-300 ease-in-out hover:border-indigo-500">
      <CardContent className="h-full animate-pulse p-2">
        <div className="flex flex-col gap-2">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-sm bg-slate-200"></div>
          <p className="line-clamp-2 h-3 w-full rounded-md bg-slate-200 text-sm font-bold text-slate-900"></p>
          <p className="line-clamp-2 h-3 w-5/6 rounded-md bg-slate-200 text-sm font-bold text-slate-900"></p>
          <p className="h-4 w-3/4 justify-self-end rounded-md bg-slate-200 text-xs font-medium text-slate-400"></p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
