import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import React from "react";
import RichContent from "../RichContent";

interface RequirementRichContentProps {
  data: {
    contentfulRequirement: {
      requirement: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    };
  };
}

const RequirementRichContent = ({ data }: RequirementRichContentProps) => {
  const richContent = data.contentfulRequirement.requirement;
  return (
    <section className="container mx-auto mb-32 pt-24 text-gray-primary md:px-28">
      <RichContent richContent={richContent}></RichContent>
    </section>
  );
};

export default RequirementRichContent;
