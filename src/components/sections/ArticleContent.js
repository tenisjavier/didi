import React from "react";
import RichContent from "../RichContent";

const ArticleContent = ({ data }) => {
  const richContent = data.contentfulArticle.content;
  const date = data.contentfulArticle.updatedAt;
  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28">
      <div className="mt-8 flex w-full justify-end font-bold">
        {date.substring(0, 10)}
      </div>
      <RichContent richContent={richContent}></RichContent>
    </section>
  );
};

export default ArticleContent;
