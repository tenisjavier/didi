import React from "react";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  faqs: {
    title: string;
    content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    bgColor: string;
    textColor: string;
    type: string;
  }[];
}

const DiDiAmigoFAQ = ({ faqs }: FAQProps) => {
  const items = faqs.map((con) => {
    return {
      title: con.title,
      content: con.content,
    };
  });

  const title = "Conocé más sobre DiDi Amigo";

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
