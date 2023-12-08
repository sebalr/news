import { Article } from 'src/app/news/interfaces/article.interface';

export interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
  message?: string
}

export interface Filters {
  q: string;
}
