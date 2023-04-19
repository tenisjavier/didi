import React from "react";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  data: {
    faq: {
      title: string;
      content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      bgColor: string;
      textColor: string;
      type: string;
    }[]
  };
}

const HelpCenterFAQTaxi = ({ data }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });

  const title = "Socio Taxista";
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

export default HelpCenterFAQTaxi;
