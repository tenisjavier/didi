import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  title: string;
  content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

const FaqContent = ({ title, content }: FAQProps) => {
  const items = [{
    title: title,
    content: content,
  }];

  const props = {
    title: "",
    desc: "",
    bgColor: t("HelpCenterFAQDrv.bgColor"),
    textColor: t("HelpCenterFAQDrv.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq",
    isClosed: false,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default FaqContent;
