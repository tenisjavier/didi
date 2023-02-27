import React from "react";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQTaxi = ({ data }) => {
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const title = "Socio Taxista";
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

export default HelpCenterFAQTaxi;
