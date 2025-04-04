"use client";

import { cn } from "@/lib/utils";
import { Fragment, useState } from "react";
import { generateThreadColor } from "@/lib/colors";
import { cva } from "class-variance-authority";
import { UserRoundPen } from "lucide-react";
import { Comment } from "@/app/api/news";
import { md } from "@/lib/md";

type CommentProps = {
  comment: Comment;
  depth?: number;
};

const outerLayoutVariants = cva<{ borderColor: Record<string, string> }>(
  "relative ml-4 border-l-2",
  {
    variants: {
      borderColor: {
        "#ff7f50": "border-[#ff7f50]",
        "#ffd700": "border-[#ffd700]",
        "#00ced1": "border-[#00ced1]",
        "#ff69b4": "border-[#ff69b4]",
        "#1e90ff": "border-[#1e90ff]",
        "#9370db": "border-[#9370db]",
      },
    },
    defaultVariants: {
      borderColor: "#ff7f50",
    },
  },
);

const innerLayoutVariants = cva<{ borderColor: Record<string, string> }>(
  "group relative cursor-pointer transition-colors duration-200 border-2 border-l-0 border-transparent",
  {
    variants: {
      borderColor: {
        "#ff7f50": "hover:border-[#ff7f50]",
        "#ffd700": "hover:border-[#ffd700]",
        "#00ced1": "hover:border-[#00ced1]",
        "#ff69b4": "hover:border-[#ff69b4]",
        "#1e90ff": "hover:border-[#1e90ff]",
        "#9370db": "hover:border-[#9370db]",
      },
    },
    defaultVariants: {
      borderColor: "#ff7f50",
    },
  },
);

const CommentCard = ({ comment, depth = 0 }: CommentProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const borderColor = generateThreadColor(depth);

  const directReplyCount = comment.comments?.length || 0;

  if (comment.dead || comment.deleted) return null;

  return (
    <div className={cn(outerLayoutVariants({ borderColor }))}>
      <div
        className={cn(innerLayoutVariants({ borderColor }))}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between gap-2">
            <div
              className={cn(
                "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400",
                isCollapsed && "text-gray-400 italic dark:text-gray-600",
              )}
            >
              <UserRoundPen
                size={16}
                className={cn(
                  "text-gray-700 dark:text-gray-400",
                  isCollapsed && "text-gray-400 dark:text-gray-600",
                )}
              />
              <span>{comment.user}</span>
              <span>•</span>
              <span>{comment.time_ago}</span>
            </div>
            {isCollapsed && directReplyCount > 0 && (
              <span className="rounded-full bg-[#496989] px-2 py-0.5 text-xs font-medium text-white dark:bg-[#d76100]">
                +{directReplyCount}
              </span>
            )}
          </div>
          {!isCollapsed && (
            <div className="mt-2 space-y-4 text-gray-900 dark:text-gray-200">
              {comment.content.split("<p>").map((paragraph, i) => (
                <Fragment key={i}>{md(paragraph)}</Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
      {!isCollapsed && comment.comments?.length > 0 && (
        <div>
          {comment.comments.map((reply) => (
            <CommentCard key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export { CommentCard };
