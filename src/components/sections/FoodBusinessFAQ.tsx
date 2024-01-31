import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface FoodBusinessFaqsProps {
  data: {
    faq: {
      title: string;
      content?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    }[];
  };
  title: string;
  desc: string;
}

const FoodBusinessFaqs = ({ data, title, desc }: FoodBusinessFaqsProps) => {
  console.log(data)
  let items = data.faq.map((node) => {
    return {
      title: node.title,
      content: node.content,
    };
  });

  const props = {
    title: title || t("FoodFAQ.title"),
    desc: desc || t("FoodFAQ.desc"),
    bgColor: t("FoodFAQ.bgColor"),
    textColor: t("FoodFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default FoodBusinessFaqs;
