import React from "react";
import { Card, CardContent } from "./ui/card";
import { NewsArticleType } from "@/types/news-types";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const NewsCard = ({ article }: { article: NewsArticleType }) => {
  const publishTime = moment(article.publishedAt).fromNow();

  return (
    <Card className=" duration-300 ease-in-out hover:border-indigo-500">
      <CardContent className="h-full p-2">
        <Link
          href={article.url}
          className="flex flex-col gap-2"
          target="_blank"
        >
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-sm bg-slate-200">
            {article.urlToImage ? (
              <Image
                src={article.urlToImage}
                alt={article.description}
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
          <p className="justify-self-end text-xs font-medium text-slate-400">
            <span className="text-indigo-500">{article.source.name}</span> |
            Published {publishTime}
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
