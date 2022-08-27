import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionSection from "../AccordionSection";

const SafetyWomanFAQ = ({ faq }) => {
  const { t } = useTranslation();
  let items = [];
  faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const props = {
    title: t("SafetyWomanFAQ.title"),
    bgColor: t("SafetyWomanFAQ.bgColor"),
    textColor: t("SafetyWomanFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default SafetyWomanFAQ;
