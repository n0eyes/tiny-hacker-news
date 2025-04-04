"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";

const navVariants = cva(
  "hover:text-[#496989] text-base dark:hover:text-[#f99211] transition-colors duration-200",
  {
    variants: {
      active: {
        true: "text-[#496989] dark:text-[#f99211]",
        false: "text-gray-600 dark:text-gray-400",
      },
    },
  },
);

type HeaderNavItemProps = PropsWithChildren<{
  path: "news" | "newest" | "ask" | "show" | "jobs";
  active?: boolean;
}>;

const HeaderNavItem = (props: HeaderNavItemProps) => {
  const { path, active: activeProp, children } = props;

  const { categories: [category] = ["news"] } = useParams<{
    categories: string[];
  }>();

  const active = activeProp ?? category === path;

  return (
    <Link href={`/${path}`} className={navVariants({ active })}>
      {children}
    </Link>
  );
};

export { HeaderNavItem };
