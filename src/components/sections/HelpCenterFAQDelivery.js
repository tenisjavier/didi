import React from "react";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQDelivery = ({ data }) => {
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const desc =
    "Cuentas con DiDi 24/7 para escucharte, para ayudarte.Conoce nuestro centro de ayuda para usuarios y Socios Conductores.";

  return (
    <AccordionSection
      bgColor="bg-gray-light"
      bgAccordionColor="bg-white"
      textAccordionColor="orange-primary"
      title="DiDi Entrega"
      desc={desc}
      items={items}
      type="faq"
    ></AccordionSection>
  );
};

export default HelpCenterFAQDelivery;
