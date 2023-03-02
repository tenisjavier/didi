import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

const FAQPartners = ({ data, isClosed, title }) => {
  let items = [];
  data.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });
  const props = {
    title: title || t("FAQPartners.title"),
    bgColor: t("FAQPartners.bgColor"),
    textColor: t("FAQPartners.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    isClosed: isClosed,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default FAQPartners;
