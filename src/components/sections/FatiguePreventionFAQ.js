import React from "react";
import { t } from "../../context/countryContext";
import AccordionOpenedSection from "../AccordionOpenedSection";

const FatiguePreventionFAQ = ({ data }) => {
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
