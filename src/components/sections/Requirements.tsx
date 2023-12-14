import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

interface RequirementsProps {
  title?: string;
  data: {
    name: string;
    requirement: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    contentful_id: string,
  }[];
}

const Requirements = ({ title, data }: RequirementsProps) => {
  let items = data.map((node) => {
    return {
      title: node.name,
      content: node.requirement,
      contentful_id: node.contentful_id,
    };
  });

  const props = {
    title: title || t("Requirements.title"),
    bgColor: t("Requirements.bgColor"),
    textColor: t("Requirements.textColor"),
    bgAccordionColor: "bg-white",
    textAccordionColor: "orange-primary",
    type: "req",
    items: items
  };
  return <AccordionSection {...props}></AccordionSection>;
};

export default Requirements;
