import React from "react";
import RichContent from "../RichContent";

const FaqContent = ({ title, content }) => {
  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28 pt-12">
      <h2 className="text-center">{title}</h2>
      <RichContent richContent={content}></RichContent>
    </section>
  );
};

export default FaqContent;
