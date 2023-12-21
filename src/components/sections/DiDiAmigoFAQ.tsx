import React from "react";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  title?: string;
  faqs: {
    title: string;
    content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    bgColor: string;
    textColor: string;
    type: string;
    contentful_id?: string;
  }[];
}

const DiDiAmigoFAQ = ({ faqs, title }: FAQProps) => {
  const items = faqs.map((con) => {
    return {
      title: con.title,
      content: con.content,
    };
  });

  title = title || "Conocé más sobre DiDi Amigo";

  return (
    <AccordionSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      title={title}
      items={items}
      type="faq"
    ></AccordionSection>
  );
};

export default DiDiAmigoFAQ;
