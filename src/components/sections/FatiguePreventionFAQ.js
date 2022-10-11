import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionOpenedSection from "../AccordionOpenedSection";

const FatiguePreventionFAQ = ({ data }) => {
  const { t } = useTranslation();
  let items = [];
  data.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const props = {
    title: t("FatiguePreventionFAQ.title"),
    bgColor: t("FatiguePreventionFAQ.bgColor"),
    textColor: t("FatiguePreventionFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
  };

  return <AccordionOpenedSection {...props}></AccordionOpenedSection>;
};

export default FatiguePreventionFAQ;
