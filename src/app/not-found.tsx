"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WithError } from "@/types/utility";

const Error = ({ error }: WithError) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 transition-colors duration-200 dark:bg-[#202020]">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-[#496989] dark:text-[#f99211]">
          Oops!
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          404 Not Found
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          You missed the page
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-[#496989] px-4 py-2 text-lg font-medium text-[#496989] transition-colors duration-200 hover:bg-[#496989] hover:text-white dark:border-[#f99211] dark:text-[#f99211] dark:hover:bg-[#f99211] dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
