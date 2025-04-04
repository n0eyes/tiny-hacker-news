import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NewsItem } from "@/app/api/news";
import { ShowSwitch } from "./ui/show-switch";

const newsItemVariants = cva(
  "group flex flex-col gap-2 py-4 transition-all duration-200",
  {
    variants: {
      size: {
        default: "gap-2",
        compact: "gap-1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type NewsItemProps = {
  item: NewsItem;
  className?: string;
} & VariantProps<typeof newsItemVariants>;

const NewsItemCard = ({ item, size, className }: NewsItemProps) => {
  return (
    <article className={cn(newsItemVariants({ size }), className)}>
      <Link
        href={item.url}
        className="text-xl text-gray-800 transition-colors duration-200 hover:text-[#496989] dark:text-gray-200 dark:hover:text-[#f99211]"
      >
        {item.title}
      </Link>
      <div className="flex gap-2 text-sm text-gray-500 transition-colors duration-200 dark:text-gray-400">
        <span>{item.points} points</span>
        <span>•</span>
        <Link
          prefetch={true}
          href={`/item?id=${item.id}`}
          className="text-gray-600 transition-colors duration-200 hover:text-[#496989] dark:text-gray-400 dark:hover:text-[#f99211]"
        >
          {item.comments_count} comments
        </Link>
        <span>•</span>
        <span>{item.time_ago}</span>
        <ShowSwitch hide={!item.domain}>
          <span>•</span>
          <Link
            href={item.url}
            target="_black"
            className="text-gray-600 transition-colors duration-200 hover:text-[#496989] dark:text-gray-400 dark:hover:text-[#f99211]"
          >
            {item.domain}
          </Link>
        </ShowSwitch>
      </div>
    </article>
  );
};

export { NewsItemCard };
