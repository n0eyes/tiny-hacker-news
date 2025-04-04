import { NewsCategory } from "@/types/news";
import { hnApiClient } from "./client";

type NewsItem = {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain?: string;
};

type Item = {
  id: number;
  user: string;
  time: number;
  time_ago: string;
  title: string;
  domain?: string;
  points: number;
  type: string;
  content: string;
  comments: Comment[];
  comments_count: number;
  url: string;
};

type Comment = {
  id: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: Comment[];
  comments_count: number;
  level: number;
  url: string;
  dead?: boolean;
  deleted?: boolean;
};

const getNews = async (payload?: {
  category?: NewsCategory;
  page?: number;
}) => {
  const { category = "newest", page = 1 } = payload ?? {};

  return hnApiClient.req<NewsItem[]>(`${category}/${page}.json`, {
    next: {
      revalidate: 0,
    },
  });
};

const getItem = async (id: number) => {
  return hnApiClient.req<Item>(`item/${id}.json`);
};

export type { NewsItem, Item, Comment };

export { getNews, getItem };
