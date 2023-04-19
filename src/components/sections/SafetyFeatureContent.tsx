import React from "react";
import RichContent from "../RichContent";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface SafetyFeatureContentProps {
  data: {
    contentfulFeature: {
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    }
  }
}

const SafetyFeatureContent = ({ data }: SafetyFeatureContentProps) => {
  const richContent = data.contentfulFeature.content;
  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28">
      <RichContent richContent={richContent}></RichContent>
    </section>
  );
};

export default SafetyFeatureContent;
