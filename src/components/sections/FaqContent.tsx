import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  title: string;
  contentful_id: string;
  content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

const FaqContent = ({ title, content, contentful_id }: FAQProps) => {
  const items = [{
    title: title,
    content: content,
    contentful_id
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
