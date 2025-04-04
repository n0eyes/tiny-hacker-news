import { MessageSquare } from "lucide-react";

const NoComments = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white px-4 py-12 shadow-md dark:bg-gray-800">
      <MessageSquare className="mb-4 h-16 w-16 text-gray-400 dark:text-gray-600" />
      <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Enjoy the silence, no comments here!
      </h3>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Hang tight, the comment section is still warming up!
      </p>
    </div>
  );
};

export { NoComments };
