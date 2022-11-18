import React from "react";
import AccordionNeutralSection from "../AccordionNeutralSection";
import { t } from "../../context/countryContext";

const GananciasConceptosFAQ = () => {
  const data = t("GananciasConceptosFAQ.items", { returnObjects: true });
  let items = [];
  data.forEach((con, index) => {
    items.push({
      title: con.title,
      content: con.content,
    });
  });

  const title = "Conoce los conceptos básicos de tus ganancias en DiDi";

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

export default GananciasConceptosFAQ;
