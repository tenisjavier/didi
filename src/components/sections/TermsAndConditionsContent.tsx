import React from "react";
import RichContent from "../RichContent";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface ContentProps {
  data: {
    contentfulLegal: {
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    };
  };
}

const TermsAndConditionsContent = ({ data }: ContentProps) => {
  const richContent = data?.contentfulLegal?.content;
  return (
    <>
      {richContent && (
        <section className="text-gray-primary container mx-auto mb-32 pt-24 lg:pt-32 md:px-28 ">
          <RichContent richContent={richContent}></RichContent>
        </section>
      )}
    </>
  );
};

export default TermsAndConditionsContent;
