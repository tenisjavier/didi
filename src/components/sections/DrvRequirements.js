import React from "react";
import AccordionSection from "../AccordionSection";

const DrvRequirements = ({ data }) => {
  console.log("data", data);
  let items = [];
  data.forEach((node) => {
    items.push({
      title: node.name,
      content: node.requirement,
    });
  });
  const title = "Requerimientos";
  return (
    <AccordionSection
      items={items}
      title={title}
      bgColor="bg-gray-light"
      bgAccordionColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
    ></AccordionSection>
  );
};

export default DrvRequirements;
