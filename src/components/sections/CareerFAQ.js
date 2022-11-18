import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

const CareerFAQ = ({ data }) => {
  let items = [];
  data.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });
  const props = {
    title: t("CareerFAQ.title"),
    bgColor: t("CareerFAQ.bgColor"),
    textColor: t("CareerFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default CareerFAQ;
