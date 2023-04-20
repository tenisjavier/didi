import React from "react";
import RichContent from "../RichContent";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface ContentProps {
  data: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  title: string;
}

const TextContent = ({ data, title }: ContentProps) => {
  const richContent = data;

  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28">
      {title && (
        <h2 className="text-center text-3xl md:text-left">{title}</h2>
      )}
      <RichContent richContent={richContent}></RichContent>
    </section>
  );
};

export default TextContent;
