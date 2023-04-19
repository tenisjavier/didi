import React from "react";
import RichContent from "../RichContent";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface ContentProps {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

const PartnerContent = ({ content }: ContentProps) => {
  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28">
      <RichContent richContent={content}></RichContent>
    </section>
  );
};

export default PartnerContent;
