import React from "react";
import { t } from "../../../../context/countryContext";
import AccordionSection from "../../../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FAQProps {
  data: {
    title: string;
    content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  }[];
  title: string;
  desc: string;
}

const CreditCardFAQ = ({ data, title, desc }: FAQProps) => {
  let items = data.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });

  const props = {
    title: title || t("CreditCardFAQ.title"),
    desc: desc || t("CreditCardFAQ.desc"),
    bgColor: t("CreditCardFAQ.bgColor"),
    textColor: t("CreditCardFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default CreditCardFAQ;
