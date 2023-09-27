import React from "react";
import { NewErrorType, NewsArticleType } from "@/types/news-types";
import axios from "axios";

const BASE_URL = `https://newsdata.io/api/1/news`;
const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_APPID;

const useNews = () => {
  const [articles, setArticles] = React.useState<NewsArticleType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<NewErrorType | null>(null);

  React.useEffect(() => {
    const fetchNews = async () => {
      console.log("Fetching News");
      setLoading(true);

      try {
        const response = await axios(BASE_URL, {
          params: {
            category: "world",
            language: "en",
            apiKey: API_KEY,
            image: "1",
          },
        });

        setArticles(response.data.results);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  return { articles, loading, error };
};

export default useNews;
