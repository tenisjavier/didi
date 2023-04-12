import React from "react";
import AccordionSection from "../AccordionSection";
import { t } from "../../context/countryContext";

const NeutralFAQ = ({ faqs, faqTitle }) => {
  const data = faqs || t("NeutralFAQ.items", { returnObjects: true });
  let items = [];
  data.forEach((con, index) => {
    items.push({
      title: con.title,
      normalText: con.content,
    });
  });

  const title = faqTitle || "Preguntas frecuentes";
  const props = {
    title: title,
    bgColor: "bg-white",
    textColor: "gray-primary",
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq",
  };
  return <AccordionSection {...props}></AccordionSection>;
};

export default NeutralFAQ;
