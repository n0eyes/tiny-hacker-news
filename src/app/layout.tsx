import type { Metadata } from "next";
import { PropsWithChildren } from "react";

const metadata: Metadata = {
  title: "Tiny Hacker News",
  description: "Tiny(or Today's) Hacker News",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export { metadata };

export default RootLayout;
