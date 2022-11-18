import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

const DiDiPayFAQs = ({ data }) => {
  let items = [];
  data.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const props = {
    title: t("DiDiPayFAQs.title"),
    bgColor: t("DiDiPayFAQs.bgColor"),
    textColor: t("DiDiPayFAQs.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default DiDiPayFAQs;
