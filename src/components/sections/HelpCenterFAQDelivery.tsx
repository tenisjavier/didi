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
  isClosed: boolean;
}

const HelpCenterFAQDelivery = ({ data }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
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
    ></AccordionSection>
  );
};

export default HelpCenterFAQDelivery;
