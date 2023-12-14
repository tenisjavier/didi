import React from "react";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  data: {
    contentful_id: string;
    faq: {
      title: string;
      content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      bgColor: string;
      textColor: string;
      type: string;
      contentful_id: string;
    }[]
  };
}

const HelpCenterFAQTaxi = ({ data }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
      contentful_id: node.contentful_id
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
      contentful_id={data.contentful_id}
    ></AccordionSection>
  );
};

export default HelpCenterFAQTaxi;
