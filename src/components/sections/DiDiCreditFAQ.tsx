import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface DiDiCreditFAQProps {
  data: {
    title: string;
    content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  }[];
  title: string;
  desc: string;
}

const DiDiCreditFAQ = ({ data, title, desc }: DiDiCreditFAQProps) => {
  let items = data.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });

  const props = {
    title: title || t("DiDiCreditFAQ.title"),
    desc: desc || t("DiDiCreditFAQ.desc"),
    bgColor: t("DiDiCreditFAQ.bgColor"),
    textColor: t("DiDiCreditFAQ.textColor"),
    textAccordionColor: t("DiDiCreditFAQ.textAccordionColor"),
    bgAccordionColor: t("DiDiCreditFAQ.bgAccordionColor"),
    items: items,
    type: "faq",
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default DiDiCreditFAQ;
