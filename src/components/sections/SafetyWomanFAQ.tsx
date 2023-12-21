import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  faq: {
    title: string;
    content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    contentful_id?: string;
  }[];
}

const SafetyWomanFAQ = ({ faq }: FAQProps) => {
  let items = faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
      contentful_id: node.contentful_id
    };
  });

  const props = {
    title: t("SafetyWomanFAQ.title"),
    bgColor: t("SafetyWomanFAQ.bgColor"),
    textColor: t("SafetyWomanFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default SafetyWomanFAQ;
