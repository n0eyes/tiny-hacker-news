import { HeaderNavItem } from "@/components/ui/header-nav-item";
import Link from "next/link";

const Header = async () => {
  return (
    <header className="border-b border-gray-200 transition-colors duration-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <HeaderNavItem path="news">
            <h1 className="text-3xl font-bold text-[#496989] transition-colors duration-200 sm:text-4xl dark:text-[#d76100]">
              Hacker News
            </h1>
          </HeaderNavItem>
          <nav className="flex flex-wrap gap-4 text-sm">
            <HeaderNavItem path="news">News</HeaderNavItem>
            <HeaderNavItem path="newest">Newest</HeaderNavItem>
            <HeaderNavItem path="ask">Ask</HeaderNavItem>
            <HeaderNavItem path="jobs">Jobs</HeaderNavItem>
          </nav>
        </div>
      </div>
    </header>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubNav = () => {
  return (
    <nav className="mt-4 flex gap-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-gray-600 transition-colors duration-200 hover:text-[#496989] dark:text-gray-400 dark:hover:text-[#f99211]"
      >
        📝 <span>Posts</span>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 text-gray-600 transition-colors duration-200 hover:text-[#496989] dark:text-gray-400 dark:hover:text-[#f99211]"
      >
        🔖 <span>Saved</span>
      </Link>
    </nav>
  );
};

export { Header };
