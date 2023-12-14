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
  isClosed: boolean;
  contentful_id: string;
}

const HelpCenterFAQDelivery = ({ data }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
      contentful_id: node.contentful_id
    };
  });

  const desc =
    "Cuentas con DiDi 24/7 para escucharte, para ayudarte.Conoce nuestro centro de ayuda para usuarios y Socios Conductores.";

  return (
    <AccordionSection
      bgColor="bg-gray-light"
      textColor="gray-primary"
      bgAccordionColor="bg-white"
      textAccordionColor="orange-primary"
      title="DiDi Entrega"
      desc={desc}
      items={items}
      type="faq"
      contentful_id={data.contentful_id}
    ></AccordionSection>
  );
};

export default HelpCenterFAQDelivery;
