export interface NewsArticleType {
  source: {
    id: null | String;
    name: String;
  };
  author: String;
  title: String;
  description: String;
  url: String;
  urlToImage: String;
  publishedAt: String;
  content: String;
}

export interface NewErrorType {
  status: String;
  code: String;
  message: String;
}
