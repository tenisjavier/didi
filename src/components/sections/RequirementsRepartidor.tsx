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
  }[];
}

const RequirementsRepartidor = ({ title, data }: RequirementsProps) => {
  let items = data.map((node) => {
    return {
      title: node.name,
      content: node.requirement,
    };
  });

  const props = {
    title: title || t("RequirementsRepartidor.title"),
    bgColor: t("RequirementsRepartidor.bgColor"),
    textColor: t("RequirementsRepartidor.textColor"),
    bgAccordionColor: "bg-white",
    textAccordionColor: "orange-primary",
    type: "req",
    items: items
  };
  return <AccordionSection {...props}></AccordionSection>;
};

export default RequirementsRepartidor;
