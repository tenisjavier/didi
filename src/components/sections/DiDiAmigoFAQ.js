import React from "react";
import AccordionSection from "../AccordionSection";

const DiDiAmigoFAQ = ({ faqs }) => {
  let items = [];
  faqs.forEach((con) => {
    items.push({
      title: con.title,
      content: con.content,
    });
  });

  const title = "Conoce más sobre DiDi Amigo";

  return (
    <AccordionSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      title={title}
      items={items}
      type="faq"
    ></AccordionSection>
  );
};

export default DiDiAmigoFAQ;
