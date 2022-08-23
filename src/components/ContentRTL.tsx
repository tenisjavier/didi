import React, { ReactNode } from "react";
import ContactCard, { ContentBlockProps, InfoContent } from "./ContentBlockRTL";

export interface ContentProps {
  content: ContentBlockProps[];
}

const ContentRTL = ({ content }: ContentProps) => {
  return (
    <section className={"py-12"}>
      <div className="container mx-auto flex  flex-col flex-wrap justify-center text-right">
        {content.map((item, index) => {
          return <ContactCard {...item} key={index}></ContactCard>;
        })}
      </div>
    </section>
  );
};

export default ContentRTL;
