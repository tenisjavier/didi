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
      contentful_id: string;
    }[]
  };
  isClosed: boolean;
}

const HelpCenterFAQ = ({ data, isClosed }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });

  const props = {
    title: t("HelpCenterFAQ.title"),
    bgColor: t("HelpCenterFAQ.bgColor"),
    textColor: t("HelpCenterFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
    isClosed: isClosed,
    type: "faq",
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQ;
