import React from "react";
import { NewErrorType, NewsArticleType } from "@/types/news-types";
import axios from "axios";

const BASE_URL = `https://newsdata.io/api/1/news`;
const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_APPID;

const useNews = () => {
  const [articles, setArticles] = React.useState<NewsArticleType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<NewErrorType | null>(null);
  const [nextPage, setNextPage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchNews = async () => {
      console.log("Fetching News");
      setLoading(true);

      try {
        const response = await axios(BASE_URL, {
          params: {
            category: "technology",
            language: "en",
            apiKey: API_KEY,
            image: "1",
          },
        });

        setArticles(response.data.results);
        setNextPage(response.data.nextPage);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const fetchMoreNews = async () => {
    try {
      const response = await axios(BASE_URL, {
        params: {
          category: "technology",
          language: "en",
          apiKey: API_KEY,
          image: "1",
          page: nextPage,
        },
      });

      const newArticles: NewsArticleType[] = [
        ...articles,
        ...response.data.results,
      ];
      setArticles(newArticles);
      setNextPage(response.data.nextPage);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  return { articles, fetchMoreNews, loading, error };
};

export default useNews;
