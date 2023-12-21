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
    contentful_id?: string;
  }[];
}

const DiDiPayFAQs = ({ title, data }: FAQProps) => {
  const items = data.map((node) => {
    return {
      title: node.title,
      content: node.content,
      contentful_id: node.contentful_id,
    };
  });

  const props = {
    title: title || t("DiDiPayFAQs.title"),
    bgColor: t("DiDiPayFAQs.bgColor"),
    textColor: t("DiDiPayFAQs.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default DiDiPayFAQs;
