import { NewsItemCard } from "@/components/news-item";
import { getNews } from "../api/news";
import { WithCatchAllParams } from "@/types/utility";
import { notFound } from "next/navigation";
import { NewsCategory } from "@/types/news";
import { isSameArray } from "@/lib/utils";

const CATCH_ALL_ROUTES = [
  ["news"],
  ["newest"],
  ["ask"],
  ["jobs"],
  ["show"],
  ["user"],
] satisfies Array<[NewsCategory]>;

// news , newest 10 / ask , show 2 / jobs 1
const Home = async ({ params }: WithCatchAllParams<"categories">) => {
  const { categories: [category] = ["news"] } = await params;

  const isValidRoute = ((current: string): current is NewsCategory =>
    CATCH_ALL_ROUTES.some((route) => isSameArray(route, [current])))(category);

  if (!isValidRoute) {
    notFound();
  }

  const news = await getNews({ category });

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-200 dark:bg-[#202020]">
      <main className="container mx-auto space-y-6 px-4 py-6">
        {news.map((newsItem) => (
          <NewsItemCard key={newsItem.id} item={newsItem} />
        ))}
      </main>
    </div>
  );
};

export default Home;
