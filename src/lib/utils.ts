import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const isSameArray = (a: unknown[], b: unknown[]) =>
  a.length === b.length && !isDifferentArray(a, b);

const isDifferentArray = (a: unknown[], b: unknown[]) =>
  a.length !== b.length || a.some((item, index) => item !== b[index]);

export { cn, isSameArray, isDifferentArray };
