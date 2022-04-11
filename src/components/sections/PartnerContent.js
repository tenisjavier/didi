import React from "react";
import RichContent from "../RichContent";

const PartnerContent = ({ content }) => {
  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28">
      <RichContent richContent={content}></RichContent>
    </section>
  );
};

export default PartnerContent;
