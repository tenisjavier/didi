import React from "react";
import RichContent from "../RichContent";

const SafetyFeatureContent = ({ data }) => {
  const richContent = data.contentfulFeature.content;
  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28">
      <RichContent richContent={richContent}></RichContent>
    </section>
  );
};

export default SafetyFeatureContent;
