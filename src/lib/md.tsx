const md = (content: string) => {
  if (!content) return null;

  if (content.startsWith("> ") || content.startsWith("&gt; ")) {
    return (
      <p
        className="block overflow-auto border-l-4 border-gray-300 pl-4 text-gray-600 italic dark:border-gray-700 dark:text-gray-400"
        dangerouslySetInnerHTML={{
          __html: content.slice(4),
        }}
      />
    );
  }

  if (content.startsWith("- ")) {
    return (
      <p
        className="overflow-auto"
        dangerouslySetInnerHTML={{ __html: content.replace("- ", "• ") }}
      />
    );
  }

  if (content === "---") {
    return <hr />;
  }

  return (
    <p
      className="overflow-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export { md };
