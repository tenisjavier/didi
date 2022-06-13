import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionSection from "../AccordionSection";

const Requirements = ({ data }) => {
  const { t } = useTranslation();
  const props = {
    title: t("Requirements.title"),
    bgColor: t("Requirements.bgColor"),
    textColor: t("Requirements.textColor"),
    bgAccordionColor: "bg-white",
    textAccordionColor: "orange-primary",
  };
  let items = [];
  data.forEach((node) => {
    items.push({
      title: node.name,
      content: node.requirement,
    });
  });

  props.items = items;
  return <AccordionSection {...props}></AccordionSection>;
};

export default Requirements;
