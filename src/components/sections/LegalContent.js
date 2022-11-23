import React from "react";
import RichContent from "../RichContent";

const LegalContent = ({ content }) => {
  return (
    <section className="text-gray-primary container mx-auto mb-32 md:px-28">
      <div className="mt-8 flex w-full justify-end font-bold">
        {/* {date.substring(0, 10)} */}
      </div>
      <RichContent richContent={content}></RichContent>
    </section>
  );
};

export default LegalContent;
