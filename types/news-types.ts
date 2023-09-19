export interface NewsArticleType {
  source: {
    id: null | string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewErrorType {
  status: string;
  code: string;
  message: string;
}
