import React from "react";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import RichContent from "../RichContent";

interface ArticleProps {
  data: {
    contentfulArticle: {
      author: string;
      authorRole: string;
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    }
  };
}

const ArticleContent = ({ data }: ArticleProps) => {
  const richContent = data.contentfulArticle.content;
  // const date = data.contentfulArticle.updatedAt;
  const author = data.contentfulArticle.author;
  const authorRole = data.contentfulArticle.authorRole;
  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28">
      <div className="mt-8 flex w-full justify-start font-bold">
        {author && author}<br></br>
        {authorRole && authorRole}
      </div>
      <RichContent richContent={richContent}></RichContent>
    </section>
  );
};

export default ArticleContent;
