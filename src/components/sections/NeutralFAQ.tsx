import React from "react";
import AccordionSection from "../AccordionSection";
import { t } from "../../context/countryContext";
interface FAQProps {
  faqs: {
    title: string;
    content: string;
  }[];
  faqTitle: string;
}

const NeutralFAQ = ({ faqs, faqTitle }: FAQProps) => {
  const data = faqs || t("NeutralFAQ.items", { returnObjects: true });
  let items = data.map((node) => {
    return {
      title: node.title,
      normalText: node.content,
    };
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
