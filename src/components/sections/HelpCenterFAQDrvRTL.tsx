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

const HelpCenterFAQDrvRTL = ({ data }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
      contentful_id: node.contentful_id,
    };
  });

  const props = {
    title: t("HelpCenterFAQDrvRTL.title"),
    bgColor: t("HelpCenterFAQDrvRTL.bgColor"),
    textColor: t("HelpCenterFAQDrvRTL.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    RTL: true,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQDrvRTL;
