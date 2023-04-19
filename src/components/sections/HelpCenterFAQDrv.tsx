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
}

const HelpCenterFAQDrv = ({ data }: FAQProps) => {
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });

  const props = {
    title: t("HelpCenterFAQDrv.title"),
    desc: t("HelpCenterFAQDrv.desc"),
    bgColor: t("HelpCenterFAQDrv.bgColor"),
    textColor: t("HelpCenterFAQDrv.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq",
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQDrv;
