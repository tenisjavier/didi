import React from "react";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQDrv = ({ data }) => {
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });
  const title = "Socio Conductor";
  return (
    <AccordionSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      title={title}
      items={items}
    ></AccordionSection>
  );
};

export default HelpCenterFAQDrv;
