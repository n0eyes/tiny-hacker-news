import { cn } from "@/lib/utils";
import { SVGProps } from "react";

type SpinnerProps = SVGProps<SVGSVGElement> & {
  size?: "sm" | "md" | "lg";
};

const Spinner = ({ className, size = "md", ...props }: SpinnerProps) => {
  const sizeClass = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        "animate-spin fill-[#496989] text-gray-400 dark:fill-[#f99211] dark:text-gray-600",
        sizeClass[size],
        className,
      )}
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export { Spinner };
