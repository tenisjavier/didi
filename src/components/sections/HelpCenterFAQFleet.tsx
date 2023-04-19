import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  data: {
    title: string;
    content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    bgColor: string;
    textColor: string;
    type: string;
  }[];
  isClosed: boolean;
  title: string;
}

const HelpCenterFAQFleet = ({ data, isClosed, title }: FAQProps) => {
  let items = data.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });
  const props = {
    title: title || t("HelpCenterFAQFleet.title"),
    bgColor: t("HelpCenterFAQFleet.bgColor"),
    textColor: t("HelpCenterFAQFleet.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
    isClosed: isClosed,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQFleet;
