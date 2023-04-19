import React from "react";
import { t } from "../../context/countryContext";
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
  title: string;
}

const HelpCenterFAQPax = ({ data, isClosed, title }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });
  
  const props = {
    title: title || t("HelpCenterFAQPax.title"),
    desc: t("HelpCenterFAQPax.desc"),
    bgColor: t("HelpCenterFAQPax.bgColor"),
    textColor: t("HelpCenterFAQPax.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
    isClosed: isClosed,
    type: "faq",
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQPax;
