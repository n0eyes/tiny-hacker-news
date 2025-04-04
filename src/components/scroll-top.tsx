import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollTopButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed right-4 bottom-17 h-10 w-10 cursor-pointer rounded-full bg-white text-gray-400 shadow-lg transition-all duration-200 hover:text-[#496989] dark:bg-gray-800 dark:hover:text-[#d76100]"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
};

export { ScrollTopButton };
