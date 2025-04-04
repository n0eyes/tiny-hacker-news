import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CommentCard } from "@/components/comment";
import { getItem } from "@/app/api/news";
import { Fragment } from "react";
import { md } from "@/lib/md";
import { WithSearchParams } from "@/types/utility";
import { ShowSwitch } from "@/components/ui/show-switch";
import { BackButton } from "@/components/ui/back-button";
import { NoComments } from "@/components/ui/no-comments";

const CommentsPage = async ({ searchParams }: WithSearchParams<"id">) => {
  const { id: itemId } = await searchParams;

  const item = await getItem(Number(itemId));

  if (!item) {
    throw new Error("Item not found");
  }

  return (
    <div className="min-h-screen transition-colors duration-200">
      <div className="container mx-auto space-y-6 px-4 py-6">
        <BackButton className="inline-flex items-center text-gray-600 transition-colors duration-200 hover:text-[#496989] dark:text-gray-400 dark:hover:text-[#f99211]">
          <ArrowLeft className="mr-2 h-5 w-5 transition-none duration-200" />
          Back
        </BackButton>

        <h1 className="bg-gradient-to-r from-[#496989] via-[#3a5470] to-[#2b3f57] bg-clip-text text-4xl font-bold text-transparent dark:from-[#d76100] dark:via-[#c25600] dark:to-[#ad4b00]">
          {item.title}
        </h1>

        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{item.points} points</span>
          <span>•</span>
          <span>{item.time_ago} days</span>
          <span>•</span>
          <span>{item.comments_count} comments</span>
          <ShowSwitch hide={!item.domain}>
            <span>•</span>
            <Link
              href={item.url}
              className="text-gray-600 transition-colors duration-200 hover:text-[#496989] dark:text-gray-400 dark:hover:text-[#f99211]"
            >
              {item.domain}
            </Link>
          </ShowSwitch>
        </div>

        {item.content && (
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="prose dark:prose-invert max-w-none space-y-4">
              {item.content.split("<p>").map((paragraph, index) => (
                <Fragment key={index}>{md(paragraph)}</Fragment>
              ))}
            </div>
          </div>
        )}

        <h2 className="mt-8 mb-4 text-2xl font-bold">Comments</h2>

        {item.comments.length > 0 ? (
          <div className="space-y-6">
            {item.comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          <NoComments />
        )}
      </div>
    </div>
  );
};

export default CommentsPage;
