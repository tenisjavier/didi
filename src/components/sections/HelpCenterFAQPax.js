import React from "react";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQPax = ({ data }) => {
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });
  const title = "Pasajeros";

  return (
    <AccordionSection
      bgColor="bg-gray-light"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-white"
      title={title}
      items={items}
    ></AccordionSection>
  );
};

export default HelpCenterFAQPax;
