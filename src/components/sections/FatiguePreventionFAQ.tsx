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

const FatiguePreventionFAQ = ({ data }: FAQProps) => {
  const items = data.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });

  const props = {
    title: t("FatiguePreventionFAQ.title"),
    bgColor: t("FatiguePreventionFAQ.bgColor"),
    textColor: t("FatiguePreventionFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default FatiguePreventionFAQ;
