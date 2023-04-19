import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  title: string;
  data: {
    title: string;
    content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    bgColor: string;
    textColor: string;
    type: string;
  }[];
  isClosed: boolean;
}

const FAQPartners = ({ data, isClosed, title }: FAQProps) => {
  const items = data.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });
  const props = {
    title: title || t("FAQPartners.title"),
    bgColor: t("FAQPartners.bgColor"),
    textColor: t("FAQPartners.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    isClosed: isClosed,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default FAQPartners;
