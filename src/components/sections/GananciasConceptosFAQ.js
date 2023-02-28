import React from "react";
import AccordionSection from "../AccordionSection";
import { t } from "../../context/countryContext";

const GananciasConceptosFAQ = () => {
  const data = t("GananciasConceptosFAQ.items", { returnObjects: true });
  let items = [];
  data.forEach((con, index) => {
    items.push({
      title: con.title,
      normalText: con.content,
    });
  });

  const props = {
    bgColor: "bg-white",
    textColor: "gray-primary",
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    title: "Conoce los conceptos básicos de tus ganancias en DiDi",
    items: items,
    type: "faq",
  };
  return <AccordionSection {...props}></AccordionSection>;
};

export default GananciasConceptosFAQ;
