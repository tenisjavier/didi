import React from "react";
import { t } from "../../../../context/countryContext";
import { useLocation } from "@reach/router";
import AccordionSection from "../../../AccordionSection";
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
  const { pathname } = useLocation();

  let bgColor = t("DiDiCreditFAQ.bgColor")
  let textColor = t("DiDiCreditFAQ.textColor")

  if (pathname.includes("/preguntas-frecuentes/")) {
    bgColor = 'bg-white'
    textColor = 'gray-primary'
  }

  let items = data.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });

  const props = {
    title: title || t("DiDiCreditFAQ.title"),
    desc: desc || t("DiDiCreditFAQ.desc"),
    bgColor,
    textColor,
    textAccordionColor: t("DiDiCreditFAQ.textAccordionColor"),
    bgAccordionColor: t("DiDiCreditFAQ.bgAccordionColor"),
    items: items,
    type: "faq",
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default DiDiCreditFAQ;
