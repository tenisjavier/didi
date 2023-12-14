import React from "react";
import { t } from "../../context/countryContext";
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
  title: string;
}

const HelpCenterFAQPax = ({ data, isClosed, title }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
      contentful_id: node.contentful_id,
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
    contentful_id: data.contentful_id
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQPax;
