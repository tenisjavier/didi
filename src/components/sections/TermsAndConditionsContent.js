import React from "react";
import RichContent from "../RichContent";

const TermsAndConditionsContent = ({ data }) => {
  const richContent = data.contentfulLegal.content;
  return (
    <section className="text-gray-primary container mx-auto mb-32 pt-24 md:px-28">
      <RichContent richContent={richContent}></RichContent>
    </section>
  );
};

export default TermsAndConditionsContent;
