import React from "react";
import AccordionNeutralSection from "../AccordionNeutralSection";
import { t } from "../../context/countryContext";

const NeutralFAQ = ({ faqs, faqTitle }) => {
  const data = faqs || t("NeutralFAQ.items", { returnObjects: true });
  let items = [];
  data.forEach((con, index) => {
    items.push({
      title: con.title,
      content: con.content,
    });
  });

  const title = faqTitle || "Preguntas frecuentes";

  return (
    <AccordionNeutralSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      title={title}
      items={items}
    ></AccordionNeutralSection>
  );
};

export default NeutralFAQ;
