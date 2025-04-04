import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import type React from "react";

import { Header } from "./header";
import { ThemeToggle } from "@/components/theme-toggle";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tiny Hacker News",
  description: "Tiny Hacker News",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head />
      <body className="bg-gray-50 transition-colors duration-200 dark:bg-[#202020]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Header />
          <main className="max-w-dvw">{children}</main>

          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
